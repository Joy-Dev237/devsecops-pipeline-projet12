# devsecops-pipeline-projet12
flowchart TD
    A[Dev Local] -->|pre-commit Gitleaks| B[git push/PR]
    B --> C[GitHub Actions]
    C --> D[Gitleaks + Semgrep SAST]
    C --> E[Build Docker]
    E --> F[Trivy SCA + Container Scan]
    F --> G[OPA/Conftest Policy]
    G --> H{All Green?}
    H -->|Oui| I[Deploy Staging]
    H -->|Non| J[Blocage + Notification]# devsecops-pipeline-projet12
PIPELINE DEVSECOPS
