---
title: Solving Linear DSGE Models with Structure Preserving Doubling Methods
authors:
- Johannes Huber
- admin
- Johanna Saecker
date: '2024-03-01'
publishDate: '2024-03-01'
publication_types:
- working paper
publication: ""
doi: ''
abstract: This paper applies structure preserving doubling methods to solve the matrix quadratic underlying the recursive solution of linear DSGE models. We present and compare two structure preserving doubling algorithms (SDA) to other competing methods -- the QZ method, a Newton algorithm, and an iterative Bernoulli  approach -- as well as the related cyclic and logarithmic reduction algorithms. Our comparison is completed using nearly 100 different models from the Macroeconomic Model Data Base (MMB) and different parameterizations of the monetary policy rule in the medium scale New Keynesian model of Smets and Wouters (2007) iteratively. We find that both (SDA) perform very favorably relative to QZ, with generally more accurate solutions computed in less time. While we collect theoretical convergence results that promise quadratic convergence rates to a unique stable solution, the algorithms may fail to converge when there is a breakdown due to singularity of the coefficient matrices in the recursion. One of the proposed algorithms can overcome this problem by an appropriate (re)initialization. This \ac{SDA} also performs particular well in refining solutions of different methods or from nearby parameterizations.
tags:
- Numerical accuracy
- DSGE
- Solution methods

# Display this page in the Featured widget?
featured: false

links:
- name: IMFS Working Paper Series
  url: https://www.imfs-frankfurt.de/forschung/imfs-working-papers/details.html?tx_mmpublications_publicationsdetail%5Bcontroller%5D=Publication&tx_mmpublications_publicationsdetail%5Bpublication%5D=461&cHash=f53244e0345a27419a9d40a3af98c02f
url_pdf: https://hessenbox-a10.rz.uni-frankfurt.de/dl/fiKYrFgTkN2YkgmiWRNbpW/doubling_DSGE.pdf
url_code: 'https://github.com/HugoBlox/hugo-blox-builder'
url_dataset: '#'
url_poster: '#'
url_project: ''
url_slides: ''
url_source: '#'
url_video: '#'

---