---
title: Numerical Stability Analysis of Linear DSGE Models - Backward Errors, Forward Errors and Condition Numbers
authors:
- admin
date: '2023-04-01'
publishDate: '2023-04-01'
publication_types:
- article
publication: 'IMFS Working Paper Series'
doi: ''
abstract: This paper develops and implements a backward and forward error analysis of and condition numbers for the numerical stability of the solutions of linear dynamic stochastic general equilibrium (DSGE) models. Comparing seven different solution methods from the literature, I demonstrate an economically significant loss of accuracy specifically in  standard, generalized Schur (or QZ) decomposition based solutions methods resulting from large backward errors in solving the associated matrix quadratic problem. This is illustrated in the monetary macro model of Smets and Wouters (2007) and two production-based asset pricing models, a simple model of external habits with a readily available symbolic solution and the model of Jermann (1998) that lacks such a symbolic solution - QZ-based numerical solutions miss the equity premium by up to several annualized percentage points for parameterizations that either match the chosen calibration targets or are nearby to the parameterization in the literature. While the numerical solution methods from the literature failed to give any indication of these potential errors, easily implementable backward-error metrics and condition numbers are shown to successfully warn of such potential inaccuracies. The analysis is then performed for a database of roughly 100 DSGE models from the literature and a large set of draws from the model of Smets and Wouters (2007). While economically relevant errors do not appear pervasive from these latter applications, accuracies that differ by several orders of magnitude persist.
tags:
- Numerical accuracy
- DSGE
- Solution methods
- Condition number
- Backward error
- Forward error

# Display this page in the Featured widget?
featured: true

links:
- name: IMFS Working Paper Series
  url: https://www.imfs-frankfurt.de/forschung/imfs-working-papers/details.html?tx_mmpublications_publicationsdetail%5Bcontroller%5D=Publication&tx_mmpublications_publicationsdetail%5Bpublication%5D=457&cHash=625ff84c3080b3e72cee7c1eec6f2a2d
url_pdf: https://www.dropbox.com/scl/fi/pir9qvgw1qxyijpet2ib7/backward_error_conditioning_linear_dsge.pdf?rlkey=a9oo1c4h24ex3toroxu3sbl5l&dl=0
url_code: https://github.com/AlexMeyer-Gohde/Numerical-Stability-Analysis-of-Linear-DSGE-Models
#url_dataset: '#'
#url_poster: '#'
#url_project: ''
url_slides: https://www.dropbox.com/scl/fi/zwgdn1k82vvh343mro858/meyer-gohde_snde_2023.pdf?rlkey=8qqxnss9a9kyrjwxrfp81xpik&dl=1
#url_source: '#'
#url_video: '#'

share: false
---
