package main

type GreetService struct{}

func (g *GreetService) Greet(name string) string {
	return "Hello " + name + "!"
}

func (g *GreetService) Add(num1, num2 int) int {
	return num1 + num2
}
