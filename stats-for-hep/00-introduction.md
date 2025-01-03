# Introduction

Once data is collected by high energy physics (HEP) experiments and reconstructed offline, it is analyzed to search and measure processes of interest.
Typically, the raw data is entirely dominated by irrelevant background processes which we want to filter out in favor of the signal.
The first step towards this is through appropriate online triggers, followed by offline selections to isolate the signal.

Optimizing the event selection for all but a handful of data-driven searches requires simulations of the signal and background processes.
Additionally, once the selections and phase space in which to perform the measurement have been finalized, the expected signal and background yields have to be carefully estimated, which often again necessitates simulations, as well as data-driven methods via unbiased control regions.

Once we have our observations, and signal and background estimates, the final critical step is to interpret the results in a robust statistical framework.
At the LHC, this is typically done using a frequentist, likelihood-based approach.
In these notes, this approach is introduced by way of simple experimental examples.

These notes are organized as follows.
{numref}`Chapter %s <sec:likelihood>` introduces the concepts of the likelihood functions and test statistics, with {numref}`Chapter %s <sec:hypothesis_testing>` discussing the framework for hypothesis testing, including $p$-values, significances, and the statistical definition of a "discovery".
{numref}`Chapters %s <sec:intervals>` and {numref}`%s <sec:expected>` then describe frequentist confidence intervals and upper limits, and the important concepts of expected significances and limits, respectively.
Finally, asymptotic approximations to simplify these computations are discussed in [Part II](./05-asymptotic-form-mle.ipynb).