package main

import (
	"encoding/json"
	"os"
	"path/filepath"
)

const AppName = "Cubicle"

type Config struct {
	CurrentProfile       string `json:"current_profile"`
	SecondsPerScreenshot int    `json:"seconds_per_screenshot"`
	MinutesBetweenSaves  int    `json:"minutes_between_saves"`
}

var defaultConfig = Config{
	CurrentProfile:       "default",
	SecondsPerScreenshot: 5,
	MinutesBetweenSaves:  1,
}

func (c *Config) SetCurrentProfile(profileName string) error {
	c.CurrentProfile = profileName
	return saveConfig(c)
}

func LoadConfig() (*Config, error) {
	configPath, err := getConfigPath()
	if err != nil {
		return nil, err
	}

	if _, err := os.Stat(configPath); os.IsNotExist(err) {
		return &defaultConfig, saveConfig(&defaultConfig)
	}

	file, err := os.ReadFile(configPath)
	if err != nil {
		return nil, err
	}

	var config Config
	err = json.Unmarshal(file, &config)
	if err != nil {
		return nil, err
	}

	return &config, nil
}

func saveConfig(config *Config) error {
	configPath, err := getConfigPath()
	if err != nil {
		return err
	}

	data, err := json.MarshalIndent(config, "", "  ")
	if err != nil {
		return err
	}

	return os.WriteFile(configPath, data, 0644)
}

func getConfigPath() (string, error) {
	configDir, err := os.UserConfigDir()
	if err != nil {
		return "", err
	}

	appConfigDir := filepath.Join(configDir, AppName)
	err = os.MkdirAll(appConfigDir, 0755)
	if err != nil {
		return "", err
	}

	return filepath.Join(appConfigDir, "config.json"), nil
}
