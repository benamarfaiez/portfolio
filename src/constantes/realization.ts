import { ProjectRealizationItem } from "../types/experiences";

export const normalizeRealization = (
  value: string | ProjectRealizationItem
): ProjectRealizationItem => (typeof value === 'string' ? { name: value } : value);

export const isSubTask = (name: string): boolean => name.includes('sous_tache');