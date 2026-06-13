```rego
package main

# Interdire root user
deny[msg] {
 input[i].Cmd == "user"
 val := input[i].Value[0]
 val == "root"
 msg := "Dockerfile must not run as root user"
}

# Interdire le tag latest
deny[msg] {
 input[i].Cmd == "from"
 contains(input[i].Value[0], ":latest")
 msg := "Do not use 'latest' tag"
}
