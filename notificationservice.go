package main

import (
	"github.com/gen2brain/beeep"
)

// NotificationService handles system notifications
type NotificationService struct{}

// NewNotificationService creates a new NotificationService
func NewNotificationService() *NotificationService {
	return &NotificationService{}
}

// ShowNotification displays a system notification
func (s *NotificationService) ShowNotification(title, message string) error {
	return beeep.Notify(title, message, "")
}
