package main

import "math"

type Stat struct {
	XP    int `json:"xp"`
	Level int `json:"level"`
}

type CharacterStats struct {
	// Base Stats
	Strength     Stat
	Dexterity    Stat
	Stamina      Stat
	Intelligence Stat
	Wisdom       Stat
	Charisma     Stat
	Perception   Stat
	Agility      Stat
	Creativity   Stat
	Endurance    Stat
	Marksmanship Stat
	Speed        Stat

	// Skill Stats
	Crafting     Stat
	Mining       Stat
	Fishing      Stat
	Woodcutting  Stat
	Firemaking   Stat
	Runecrafting Stat
	Farming      Stat
	Construction Stat
	Hunting      Stat
}

func NewStats() *CharacterStats {
	return &CharacterStats{
		// Base Stats
		Strength:     Stat{XP: 100, Level: 10},
		Dexterity:    Stat{XP: 100, Level: 10},
		Stamina:      Stat{XP: 100, Level: 10},
		Intelligence: Stat{XP: 100, Level: 10},
		Wisdom:       Stat{XP: 100, Level: 10},
		Charisma:     Stat{XP: 100, Level: 10},
		Perception:   Stat{XP: 100, Level: 10},
		Agility:      Stat{XP: 100, Level: 10},
		Creativity:   Stat{XP: 100, Level: 10},
		Endurance:    Stat{XP: 100, Level: 10},
		Marksmanship: Stat{XP: 100, Level: 10},
		Speed:        Stat{XP: 100, Level: 10},

		// Skill Stats
		Crafting:     Stat{XP: 10, Level: 1},
		Mining:       Stat{XP: 10, Level: 1},
		Fishing:      Stat{XP: 10, Level: 1},
		Woodcutting:  Stat{XP: 10, Level: 1},
		Firemaking:   Stat{XP: 10, Level: 1},
		Runecrafting: Stat{XP: 10, Level: 1},
		Farming:      Stat{XP: 10, Level: 1},
		Construction: Stat{XP: 10, Level: 1},
		Hunting:      Stat{XP: 10, Level: 1},
	}
}

func (s *CharacterStats) GetStats() CharacterStats {
	return *s
}

func (s *CharacterStats) getStat(statName string) *Stat {
	switch statName {
	case "Strength":
		return &s.Strength
	case "Dexterity":
		return &s.Dexterity
	case "Stamina":
		return &s.Stamina
	case "Intelligence":
		return &s.Intelligence
	case "Wisdom":
		return &s.Wisdom
	case "Charisma":
		return &s.Charisma
	case "Perception":
		return &s.Perception
	case "Agility":
		return &s.Agility
	case "Creativity":
		return &s.Creativity
	case "Endurance":
		return &s.Endurance
	case "Marksmanship":
		return &s.Marksmanship
	case "Speed":
		return &s.Speed
	case "Crafting":
		return &s.Crafting
	case "Mining":
		return &s.Mining
	case "Fishing":
		return &s.Fishing
	case "Woodcutting":
		return &s.Woodcutting
	case "Firemaking":
		return &s.Firemaking
	case "Runecrafting":
		return &s.Runecrafting
	case "Farming":
		return &s.Farming
	case "Construction":
		return &s.Construction
	case "Hunting":
		return &s.Hunting
	default:
		return nil
	}
}

func calculateLevel(xp int) int {
	return int(math.Floor(float64(xp) / 10))
}

func calculateNextLevelXP(level int) int {
	return (level + 1) * 10
}

func (s *CharacterStats) IncreaseStatXP(statName string, amount int) {
	stat := s.getStat(statName)
	if stat != nil {
		stat.XP += amount
		stat.Level = calculateLevel(stat.XP)
	}
}

func (s *CharacterStats) UpdateStat(statName string, xp int) {
	stat := s.getStat(statName)
	if stat != nil {
		stat.XP = xp
		stat.Level = calculateLevel(xp)
	}
}
