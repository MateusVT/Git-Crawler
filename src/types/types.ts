export type Repository = {
    script_execution?: { start_at?: string, finished_at?: string },
    owner?: string,
    name?: string,
    url?: string,
    language?: string,
    nameconcat?: string
    labels?: string[]
    newcomer_labels?: Label[]
    first_contribuitions?: Contribuition[]
    weekly_distribuition?: WeeklyDistribution[]
}

export type WeeklyDistribution = { week: string, dates: string[], total: number }
export type Label = { name: string, created_at: string }
export type Contribuition = { login: string, created_at: string, issue_number?: number }
// export type WeeklyDistribution = { week: string, dates: string[], total: number }