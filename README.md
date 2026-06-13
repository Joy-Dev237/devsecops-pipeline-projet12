# DevSecOps Pipeline - Projet Académique n°12

**Sécurisation des Pipelines CI/CD — Approche Shift Left Security**

![GitHub Actions Status](https://github.com/Joy-Dev237/devsecops-pipeline-projet12/actions/workflows/devsecops-pipeline.yml/badge.svg)

## Objectif du Projet
Implémentation d’un pipeline CI/CD sécurisé intégrant détection de secrets, SAST, SCA, sécurité des conteneurs et Policy as Code.

## Architecture

```mermaid
flowchart TD
    A[Développeur Local] -->|Gitleaks pre-commit| B[git push / PR]
    B --> C[GitHub Actions]
    C --> D[Gitleaks - Secret Scanning]
    C --> E[Semgrep - SAST]
    C --> F[Build Docker]
    F --> G[Trivy - SCA + Container Scan + SBOM]
    G --> H[OPA/Conftest - Policy as Code]
    H -->|✅ Tout vert| I[Déploiement autorisé]
    H -->|❌ Échec| J[Blocage automatique + rapport]


🔧 Outils Intégrés

Secret Scanning → Gitleaks
SAST → Semgrep (OWASP rules)
SCA + Conteneurs → Trivy
SBOM → CycloneDX
Policy as Code → OPA/Conftest

📊 Résultats

Pipeline complet en moins de 2 minutes
Détection automatique de secrets
Image Docker durcie (non-root, Alpine)
Rapports SARIF visibles dans Security tab

Livrable principal : Pipeline fonctionnel + documentation complète.

