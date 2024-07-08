package main

type CharacterStatsService struct {
	stats *CharacterStats
}

func NewCharacterStatsService() *CharacterStatsService {
	return &CharacterStatsService{
		stats: NewStats(),
	}
}

func (s *CharacterStatsService) GetBaseStats() map[string]Stat {
	baseStats := s.stats.GetStats()
	return map[string]Stat{
		"Strength":     baseStats.Strength,
		"Dexterity":    baseStats.Dexterity,
		"Stamina":      baseStats.Stamina,
		"Intelligence": baseStats.Intelligence,
		"Wisdom":       baseStats.Wisdom,
		"Charisma":     baseStats.Charisma,
		"Perception":   baseStats.Perception,
		"Agility":      baseStats.Agility,
		"Creativity":   baseStats.Creativity,
		"Endurance":    baseStats.Endurance,
		"Marksmanship": baseStats.Marksmanship,
		"Speed":        baseStats.Speed,
	}
}

func (s *CharacterStatsService) GetSkillStats() map[string]Stat {
	skillStats := s.stats.GetStats()
	return map[string]Stat{
		"Crafting":     skillStats.Crafting,
		"Mining":       skillStats.Mining,
		"Fishing":      skillStats.Fishing,
		"Woodcutting":  skillStats.Woodcutting,
		"Firemaking":   skillStats.Firemaking,
		"Runecrafting": skillStats.Runecrafting,
		"Farming":      skillStats.Farming,
		"Construction": skillStats.Construction,
		"Hunting":      skillStats.Hunting,
	}
}

func (s *CharacterStatsService) GetNextLevelXP(statName string) int {
	stat := s.stats.getStat(statName)
	if stat != nil {
		return calculateNextLevelXP(stat.Level)
	}
	return 0
}

func (s *CharacterStatsService) UpdateStat(statName string, xp int) {
	s.stats.UpdateStat(statName, xp)
}

func (s *CharacterStatsService) IncreaseStatXP(statName string, amount int) {
	s.stats.IncreaseStatXP(statName, amount)
}
