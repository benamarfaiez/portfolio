import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Bar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Tooltip,
    type ChartOptions,
    type TooltipItem,
} from 'chart.js';
import { skillsDiagram, type SkillCategory } from '../../data/skills';
import { ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip);

const categoryConfig: Record<SkillCategory, { title: string; color: string; gradient: string }> = {
    frontend: { title: "Frontend Development", color: "#3b82f6", gradient: "from-blue-500 to-cyan-400" },
    backend: { title: "Backend & DevOps", color: "#a855f7", gradient: "from-purple-500 to-pink-500" },
    tests: { title: "Tests", color: "#10b981", gradient: "from-emerald-500 to-teal-500" },
    database: { title: "Database", color: "#f59e0b", gradient: "from-amber-500 to-orange-500" },
    devops: { title: "DevOps", color: "#8b5cf6", gradient: "from-violet-500 to-purple-600" },
    architecture: { title: "Architecture", color: "#ef4444", gradient: "from-red-500 to-rose-600" },
};

const SkillsCategoryPage: React.FC = () => {
    const { category } = useParams<{ category: SkillCategory }>();
    const navigate = useNavigate();
    const { t } = useTranslation();

    if (!category || !Object.keys(categoryConfig).includes(category)) {
        return <div className="text-center py-32 text-3xl text-white">404 – Catégorie introuvable</div>;
    }

    const config = categoryConfig[category];
    const filtered = skillsDiagram.filter(s => s.category === category);

    const data = {
        labels: filtered.map(s => s.name),
        datasets: [{
            label: 'Niveau',
            data: filtered.map(s => s.score),
            backgroundColor: config.color + 'cc',
            borderColor: config.color,
            borderWidth: 4,
            borderRadius: 16,
            borderSkipped: 'bottom' as const,
            barThickness: 42,
            maxBarThickness: 64,
            hoverBackgroundColor: config.color,
            hoverBorderWidth: 5,
        }],
    };

    const options: ChartOptions<'bar'> = {
        responsive: true,
        maintainAspectRatio: false,
        animation: {
            duration: 1800,
            easing: 'easeOutBounce',
        },
        plugins: {
            legend: { display: false },
            tooltip: {
                backgroundColor: 'rgba(0, 0, 0, 0.9)',
                cornerRadius: 16,
                padding: 16,
                titleFont: { size: 14, weight: 'bold' },
                bodyFont: { size: 14, weight: 300 },
                displayColors: false,
                borderColor: config.color,
                borderWidth: 1,
                caretPadding: 12,
                callbacks: {
                    title: (items: TooltipItem<'bar'>[]) => items[0].label,
                    label: (item: TooltipItem<'bar'>) => `${item.parsed.y}/10`,
                    afterLabel: () => t('Niveau de maîtrise'),
                },
            },
        },
        scales: {
            x: {
                grid: { display: false },
                ticks: {
                    color: '#e5e7eb',
                    font: { size: 14, weight: 600 },
                    padding: 16,
                },
            },
            y: {
                min: 0,
                max: 10,
                ticks: {
                    stepSize: 1,
                    color: '#9ca3af',
                    font: { size: 14, weight: 500 },
                    callback: (value) => `${value}`,
                },
                grid: {
                    color: 'rgba(156, 163, 175, 0.15)',
                    lineWidth: 1.5,
                },
                title: {
                    display: true,
                    text: 'Niveau de maîtrise',
                    color: '#f3f4f6',
                    font: { size: 16, weight: 'bold' },
                    padding: { top: 20 },
                },
            },
        },
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black py-16 px-6">
            <div className="max-w-6xl mx-auto">
                <motion.button
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    onClick={() => navigate(-1)}
                    className="flex items-center gap-3 text-white/80 hover:text-white text-lg font-medium transition"
                >
                    <ArrowLeft size={28} />
                    {t('common.back_to_list')}
                </motion.button>

                <motion.h1
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`text-5xl md:text-7xl font-black text-center mb-8 bg-gradient-to-r ${config.gradient} bg-clip-text text-transparent`}
                >
                    {config.title}
                </motion.h1>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative bg-white/5 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/10 overflow-hidden p-2 md:p-4"
                >
                    <div className={`absolute inset-0 bg-gradient-to-br ${config.gradient} opacity-10`} />

                    <div className="relative h-[300px] md:h-[400px] lg:h-[500px]">
                        <Bar data={data} options={options} />
                    </div>

                    <div className="text-center mt-10 text-white/50 text-sm">
                        Auto-évaluation de {filtered.length} compétences
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default SkillsCategoryPage;