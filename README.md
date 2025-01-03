# Stats for HEP

Walkthrough of statistics concepts for HEP in Python: [rkansal47.github.io/stats-for-hep](https://rkansal47.github.io/stats-for-hep).

[![Jupyter Book Badge](https://jupyterbook.org/badge.svg)](https://rkansal47.github.io/stats-for-hep/main.html)
[![Codestyle](https://img.shields.io/badge/code%20style-black-000000.svg)](https://github.com/psf/black)
[![pre-commit.ci status](https://results.pre-commit.ci/badge/github/rkansal47/stats-for-hep/main.svg)](https://results.pre-commit.ci/latest/github/rkansal47/stats-for-hep/main)


- [Stats for HEP](#stats-for-hep)
  - [Building the book locally](#building-the-book-locally)
  - [Deploying online](#deploying-online)
  - [Credits](#credits)


## Building the book locally

If you'd like to develop and/or build the Stats for HEP book, you should:

1. Clone this repository
2. Run `pip install -r requirements.txt` (it is recommended you do this within a virtual environment)
3. (Optional) Edit the books source files located in the `stats-for-hep/` directory
4. Run `jupyter-book clean stats-for-hep/` to remove any existing builds
5. Run `jupyter-book build stats-for-hep/`

A fully-rendered HTML version of the book will be built in `stats-for-hep/_build/html/`.

## Deploying online

Builds and deploys both the website and PDF automatically on `push`es to the `main` branch via the [Github Action](https://github.com/rkansal47/stats-for-hep/blob/main/.github/workflows/deploy.yml).

**Important**: Notebook kernels must be set to `Python 3` before pushing! Otherwise the action throws a `kernel not found` error when building the book.

## Credits

This project is created using the excellent open source [Jupyter Book project](https://jupyterbook.org/) and the [executablebooks/cookiecutter-jupyter-book template](https://github.com/executablebooks/cookiecutter-jupyter-book).
