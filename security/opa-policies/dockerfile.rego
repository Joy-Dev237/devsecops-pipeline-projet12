package main

# Règle 1 : Interdire l'utilisateur root
deny[msg] {
    input[i].Cmd == "user"
    input[i].Value[0] == "root"
    msg := "Dockerfile must not run as root user"
}

# Règle 2 : Interdire le tag latest
deny[msg] {
    input[i].Cmd == "from"
    contains(input[i].Value[0], ":latest")
    msg := "Do not use 'latest' tag in production"
}
