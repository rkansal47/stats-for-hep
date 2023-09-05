Search.setIndex({"docnames": ["01-intro", "02-hypothesis-testing", "03-intervals-and-limits", "04-expected-significance-and-limits", "05-asymptotic-forms", "main"], "filenames": ["01-intro.ipynb", "02-hypothesis-testing.ipynb", "03-intervals-and-limits.ipynb", "04-expected-significance-and-limits.ipynb", "05-asymptotic-forms.ipynb", "main.md"], "titles": ["<span class=\"section-number\">1. </span>Introduction to Likelihoods and Test Statistics", "<span class=\"section-number\">2. </span>Hypothesis Testing and Upper Limits", "<span class=\"section-number\">3. </span>Confidence Intervals and Limits", "<span class=\"section-number\">4. </span>Expected Significances and Limits", "<span class=\"section-number\">5. </span>Asymptotic Formulae", "Stats for HEP"], "terms": {"let": [0, 1, 2, 3, 4], "s": [0, 2, 3, 4], "take": [0, 4], "simplest": 0, "possibl": [0, 1, 4], "case": [0, 1, 2, 3, 4], "one": [0, 1, 2, 3, 4], "bin": [0, 1, 2, 3, 4, 5], "count": [0, 1, 2, 3, 4], "experi": [0, 1, 2, 3, 4], "where": [0, 1, 2, 3, 4], "signal": [0, 2, 3, 4], "region": [0, 1, 2, 3, 4], "we": [0, 1, 2, 3, 4], "expect": [0, 1, 2, 4, 5], "event": [0, 1, 2, 3, 4], "b": [0, 1, 2, 3, 4, 5], "background": [0, 1, 2, 3], "The": [0, 1, 2, 3, 4, 5], "probabl": [0, 1, 2, 3, 4], "observ": [0, 2, 3, 4, 5], "n": [0, 1, 2, 3, 4], "distribut": [0, 1, 2, 3, 4], "poisson": [0, 1, 2, 3, 4], "mean": [0, 1, 2, 3, 4], "p": [0, 2, 3, 4, 5], "poi": [0, 2, 3, 4], "frac": [0, 1, 2, 3, 4], "e": [0, 1, 2, 3, 4], "sinc": [0, 2, 3, 4], "have": [0, 1, 2, 3, 4], "onli": [0, 1, 2, 3, 4], "two": 0, "free": 0, "paramet": [0, 1, 2, 3, 4], "thi": [0, 1, 2, 3, 4, 5], "underconstrain": 0, "so": [0, 1, 2, 3, 4], "also": [0, 1, 2, 3, 4], "add": 0, "control": [0, 1, 2, 3, 4], "m": [0, 1, 2, 3, 4], "therefor": [0, 1], "combin": [0, 5], "joint": 0, "cdot": [0, 1, 2, 3, 4], "call": [0, 1, 2, 3, 4], "In": [0, 1, 2, 3, 4, 5], "frequentist": [0, 2, 5], "philosophi": 0, "howev": [0, 1, 2, 3, 4], "all": [0, 2, 3], "etc": [0, 3, 4], "ar": [0, 1, 2, 3, 4, 5], "simpli": [0, 4], "fix": [0, 1, 2, 3, 4], "valu": [0, 2, 3, 4, 5], "natur": 0, "henc": [0, 1, 2, 3, 4], "don": [0, 1, 2, 3], "t": [0, 1, 2, 3, 4], "instead": [0, 1, 2, 3, 4], "work": [0, 2, 4], "function": [0, 1, 2, 3, 4], "interest": [0, 1, 2, 3, 4], "nuisanc": [0, 1, 2, 3, 4], "given": [0, 1, 2, 3, 4], "l": [0, 1, 2, 3, 4], "importantli": [0, 4], "To": [0, 2, 3], "deriv": [0, 2, 3], "would": [0, 1, 2, 3, 4], "us": [0, 1, 2, 3, 4, 5], "bay": 0, "rule": 0, "go": [0, 1, 3], "from": [0, 1, 2, 3, 4], "make": [0, 1, 2], "sens": [0, 2], "world": 0, "view": 0, "re": [0, 1, 2, 3, 4], "stuck": 0, "nonsens": 0, "formul": 0, "For": [0, 1, 2, 3, 4], "better": [0, 1, 2], "explan": 0, "i": [0, 1, 2, 3, 4], "recommend": [0, 1, 2, 3, 4, 5], "section": [0, 4], "2": [0, 1, 2, 3, 4, 5], "ref": [0, 1, 2, 3, 4, 5], "regard": 0, "vs": [0, 3], "bayesian": 0, "reason": [0, 1], "like": [0, 1, 2, 3, 4], "nick": 0, "smith": 0, "quot": [0, 1, 2, 3], "everyon": 0, "head": 0, "hep": [0, 3], "becaus": [0, 2, 4], "can": [0, 1, 2, 3, 4], "agre": [0, 1], "prior": 0, "often": [0, 1, 3], "more": [0, 1, 2, 4], "conveni": 0, "consid": [0, 2, 3], "neg": [0, 1, 4], "log": [0, 1, 2, 3, 4], "ln": [0, 1, 2, 3, 4], "2b": [0, 4], "goal": [0, 1], "ani": [0, 1, 2, 3], "compat": [0, 1, 2, 3], "here": [0, 1, 4, 5], "certain": [0, 2], "hypothesi": [0, 2, 3, 5], "h": [0, 1, 2], "do": [0, 2, 3, 4], "map": [0, 1], "which": [0, 1, 2, 3, 4], "just": [0, 1, 2, 3], "number": [0, 1, 2, 4], "compar": [0, 2], "against": 0, "its": [0, 3, 4], "under": [0, 1, 2, 3, 4], "problem": [0, 4], "thu": [0, 2, 3, 4], "boil": 0, "down": 0, "1": [0, 1, 2, 3, 4, 5], "choos": 0, "most": [0, 1, 4], "effect": [0, 5], "obtain": [0, 1], "particular": [0, 1, 2, 3, 4], "strength": [0, 2, 3, 4], "typic": [0, 1, 2], "lambda": [0, 1, 2, 3, 4], "hat": [0, 1, 2, 3, 4], "mle": 0, "again": [0, 1, 4], "logarithm": 0, "ha": [0, 4], "nice": 0, "asymptot": [0, 1, 2, 3, 5], "form": [0, 1, 2, 3], "ll": [0, 1, 2, 3, 4], "see": [0, 1, 2, 3, 4], "later": [0, 1, 2, 3, 4], "found": [0, 4], "exampl": [0, 1, 2, 3, 5], "set": [0, 1, 2, 3], "0": [0, 1, 2, 3, 4, 5], "gener": [0, 1, 2, 3, 4], "requir": [0, 4], "numer": 0, "minim": [0, 4], "partial": [0, 4], "solv": [0, 1, 2, 3, 4], "simultan": 0, "give": [0, 2, 3, 4], "you": [0, 1, 2, 3, 4], "might": [0, 1, 4], "Or": 0, "eq": [0, 1, 2, 3, 4], "8": [0, 1, 2, 3, 4], "2s": 0, "ms": 0, "plug": [0, 3, 4], "back": 0, "get": [0, 1, 2, 3, 4], "won": [0, 1], "write": 0, "out": 0, "even": [0, 1, 4], "simpl": [0, 1, 2, 3, 4, 5], "thei": [0, 5], "pain": 0, "next": [0, 1, 3], "step": [0, 1, 2, 3, 4], "either": 0, "sampl": [0, 1, 2, 3, 4], "multipl": [0, 3, 4], "toi": [0, 1, 2, 3, 4, 5], "an": [0, 1, 2, 3, 4], "larg": [0, 1, 4], "approxim": [0, 1, 2, 4], "now": [0, 1, 2, 3, 4], "paus": 0, "code": [0, 2, 3, 4], "up": [0, 2, 4], "what": [0, 1, 2, 3, 4, 5], "far": [0, 3], "look": [0, 1, 2, 3, 4], "import": [0, 1, 2, 3, 4], "numpi": [0, 1, 2, 3, 4], "np": [0, 1, 2, 3, 4], "matplotlib": [0, 1, 2, 3, 4], "mpl": 0, "pyplot": [0, 1, 2, 3, 4], "plt": [0, 1, 2, 3, 4], "scipi": [0, 1, 2, 3, 4], "special": [0, 1], "factori": 0, "def": [0, 1, 2, 3, 4], "mu": [0, 1, 2, 3, 4], "return": [0, 1, 2, 3, 4], "exp": 0, "power": [0, 4], "sb": [0, 1, 2, 4], "10": [0, 1, 2, 3, 4, 5], "5": [0, 1, 2, 3, 4, 5], "ns": 0, "meshgrid": 0, "arang": [0, 2, 3, 4], "16": [0, 1, 2, 3, 4], "fig": [0, 1, 2, 3, 4], "ax": [0, 1, 2, 3, 4], "subplot": [0, 1, 2, 3, 4], "len": [0, 2, 3, 4], "figsiz": [0, 1, 2, 3, 4], "4": [0, 1, 2, 3, 4, 5], "enumer": [0, 1, 2, 3, 4], "im": 0, "pcolormesh": [0, 2], "cmap": [0, 2], "turbo": [0, 2], "norm": [0, 1, 2, 3, 4], "color": [0, 1, 2, 3, 4], "lognorm": [0, 2], "vmax": [0, 2], "set_titl": [0, 1, 2, 4], "rf": [0, 1, 2, 3, 4], "set_xlabel": [0, 1, 2, 3, 4], "r": [0, 1, 2, 3, 4], "set_ylabel": [0, 1, 2, 3, 4], "colorbar": [0, 2], "ravel": 0, "tolist": 0, "pad": 0, "01": [0, 2, 3, 5], "label": [0, 1, 2, 3, 4], "show": [0, 1, 2, 3, 4], "standard": [0, 1, 2, 3, 5], "2d": 0, "poisson_nofactori": 0, "denomin": 0, "cancel": 0, "remov": 0, "comput": 0, "faster": 0, "log_poisson_nofactori": [0, 1, 2, 3, 4], "likelihood_nofactori": 0, "log_likelihood_nofactori": [0, 1, 2, 3, 4], "shat": [0, 1, 2, 3, 4], "bhat": [0, 1, 2, 3, 4], "bhathat": [0, 1, 2, 3, 4], "quadrat": [0, 1, 2, 3, 4], "formula": [0, 1, 2, 3, 5], "posit": [0, 1, 2, 3, 4], "solut": [0, 1, 2, 3, 4], "sqrt": [0, 1, 2, 3, 4], "lambda_": 0, "none": [0, 1, 2, 3, 4], "option": [0, 1, 2, 3, 4], "demo": [0, 1, 2, 3, 4], "below": [0, 1, 2, 3, 4], "bhh": [0, 1, 2, 3, 4], "bh": [0, 1, 2, 3, 4], "els": [0, 1, 2, 3, 4], "2ln": [0, 1, 2, 3, 4], "nm": [0, 2], "11": [0, 3], "15": [0, 2], "50": [0, 2, 4], "40": [0, 2, 4], "linspac": [0, 1, 2, 3, 4], "20": [0, 1, 2, 3, 4], "101": [0, 1, 2], "6": [0, 1, 2, 3, 4, 5], "int": [0, 1, 2, 3, 4], "rang": [0, 2, 4], "legend": [0, 1, 2, 3, 4], "minimum": [0, 1, 3], "note": [0, 1, 3, 4], "broader": 0, "due": 0, "miss": 0, "inform": 0, "about": [0, 1, 2, 3, 4], "demonstr": [0, 2], "explicitli": 0, "emul": 0, "perfect": 0, "set_ylim": [0, 1, 2, 3], "match": [0, 4], "previou": [0, 2, 3, 4], "inde": [0, 2], "narrow": [0, 4], "knowledg": 0, "increas": [0, 2, 4], "decreas": 0, "uncertainti": [0, 4], "broaden": 0, "why": [0, 4], "want": [0, 1, 2, 4], "constrain": 0, "them": 0, "much": [0, 1], "construct": [0, 2], "allow": [0, 2], "physic": [0, 1, 2, 5], "rather": [0, 3], "than": [0, 1, 2], "incorpor": 0, "contraint": 0, "impos": 0, "tild": [0, 1, 2, 3, 4], "left": [0, 1, 2, 3, 4], "begin": [0, 1, 2, 3, 4], "arrai": [0, 1, 2, 3, 4], "mbox": [0, 1, 2, 3], "geq0": [0, 1, 2, 3], "end": [0, 1, 2, 3, 4], "right": [0, 1, 2, 3, 4], "_s": [0, 1, 2, 3], "lambda_zero_": 0, "when": [0, 1, 2, 3, 4], "lambda_tilde_": 0, "x": [0, 1, 2, 3, 4], "convert": [0, 1, 2, 3, 4], "sh": 0, "neg_shat_mask": [0, 1, 2, 3, 4], "find": [0, 1, 2, 3, 4], "lam_": 0, "lam_zero": [0, 1, 2, 3, 4], "replac": [0, 1, 2, 3, 4], "t_zero_": [0, 1, 2, 3, 4], "t_tilde_": [0, 1, 2, 3, 4], "ts": [0, 1, 2, 3, 4], "t_zero": [0, 1, 2, 3, 4], "3": [0, 1, 2, 3, 4, 5], "9": [0, 2], "49": 0, "colour": [0, 2, 4], "blue": [0, 2, 4], "orang": [0, 1, 2, 4], "green": [0, 2, 4], "linestyl": [0, 1, 2, 3, 4], "nomin": 0, "fit": [0, 4, 5], "best": [0, 2], "though": 0, "math": 0, "sai": [0, 1, 2, 3, 4], "otherwis": 0, "walk": [0, 5], "through": [0, 1, 5], "associ": [0, 2, 3], "behaviour": 0, "common": 0, "part": [0, 1, 2, 3, 4, 5], "over": [0, 1, 2, 3, 4], "defin": [1, 2, 3], "our": [1, 2, 3, 4], "model": [1, 2, 3, 4, 5], "likelihood": [1, 2, 3, 5], "statist": [1, 2, 3, 5], "quad": [1, 2, 3], "analyt": [1, 2, 3, 4], "translat": [1, 2, 3], "h_": [1, 2, 3], "assum": [1, 3, 4], "simplic": 1, "whether": 1, "data": [1, 2, 3, 4], "support": 1, "exclud": [1, 2, 3], "quantifi": [1, 2, 3, 4], "di": 1, "agreement": [1, 2], "degre": 1, "did": 1, "search": [1, 2, 3, 5], "higg": [1, 3, 5], "boson": [1, 5], "disagre": 1, "alreadi": 1, "discuss": [1, 2, 5], "process": 1, "scalar": 1, "need": [1, 2, 3, 4], "know": [1, 3, 4], "consist": 1, "decid": 1, "recogn": 1, "alwai": [1, 2, 3, 4], "chanc": 1, "true": [1, 2, 3, 4], "type": 1, "error": [1, 4], "fals": [1, 2, 3], "ii": 1, "each": [1, 2, 3, 4], "refer": [1, 2, 3, 4, 5], "alpha": [1, 2], "beta": 1, "respect": [1, 2, 3], "handi": 1, "tabl": 1, "wikipedia": [1, 4], "befor": [1, 2, 3], "should": [1, 2, 3, 4], "comfort": 1, "level": [1, 2, 3], "although": 1, "claim": [1, 4], "someth": 1, "crazi": 1, "new": [1, 2, 3, 5], "particl": [1, 2, 5], "veri": [1, 2, 3, 4], "sure": 1, "isn": 1, "lower": [1, 2, 4], "times10": 1, "7": 1, "explain": 1, "sever": 1, "psuedo": 1, "dataset": 1, "One": [1, 2, 3], "complic": 1, "depend": [1, 3], "matter": 1, "ticker": [1, 2, 3, 4], "cm": [1, 2, 3, 4, 5], "stat": [1, 2, 3, 4], "chi2": [1, 2, 3, 4], "warn": [1, 2, 3, 4], "ipython": [1, 2, 3, 4], "displai": [1, 2, 3, 4], "markdown": 1, "latex": [1, 2, 3, 4], "rcparam": [1, 2, 3, 4], "updat": [1, 2, 3, 4], "font": [1, 2, 3, 4], "size": [1, 2, 3, 4], "filterwarn": [1, 2, 3, 4], "ignor": [1, 2, 3, 4], "altern": [1, 2, 3, 4], "squeez": [1, 2, 3, 4], "num_toi": [1, 2, 3, 4], "10000": [1, 2, 4], "100": [1, 2, 3, 4], "30": [1, 2, 4], "200": [1, 4], "1000": [1, 4], "24": [1, 2, 4], "accord": [1, 2, 3, 4], "rv": [1, 2, 3, 4], "hist": [1, 2, 3, 4], "41": [1, 2, 3], "histtyp": [1, 2, 3, 4], "densiti": [1, 2, 3, 4], "estim": [1, 2, 3], "doe": [1, 2, 3], "long": 1, "suffici": 1, "kei": 1, "base": [1, 2, 3, 4, 5], "profil": [1, 2, 3], "fact": [1, 3, 4], "doesn": [1, 2], "follow": [1, 2, 4, 5], "chi": [1, 2], "freedom": 1, "therein": 1, "essenti": [1, 2], "thing": [1, 3], "taylor": [1, 4], "expand": [1, 4], "around": [1, 4], "04": 1, "plot": [1, 2, 3, 4], "pdf": [1, 2, 4], "2_": [1, 2], "mathrm": [1, 2, 3, 4], "dof": [1, 2], "accur": 1, "low": [1, 4], "maximis": [1, 2], "equiv": [1, 4], "final": [1, 2, 4], "ob": [1, 2, 3], "n_ob": [1, 2, 3, 4], "m_ob": [1, 2, 3, 4], "t_ob": [1, 2, 3, 4], "2f": [1, 2, 3, 4], "07": 1, "And": [1, 2], "fall": 1, "get_toi": [1, 2, 3, 4], "get_p_t": [1, 2, 3, 4], "test_": [1, 2, 3, 4], "toy_": [1, 2, 3, 4], "via": [1, 2, 3, 4], "By": [1, 2, 3, 4], "default": [1, 2, 3, 4], "same": [1, 2, 3, 4, 5], "chang": [1, 2, 3, 4], "necessari": [1, 2, 3, 4], "get_ps_val": [1, 2, 3, 4], "t_tilde_ss": [1, 2, 3, 4], "p_val": [1, 2, 3, 4], "plot_p_t": [1, 2], "p_valu": [1, 2, 3, 4], "z": [1, 2, 3], "p_": [1, 2, 3], "hlim": [1, 2, 3], "test_s_label": [1, 2], "toy_s_label": [1, 2], "_": [1, 2, 3, 4], "ylim": [1, 2, 3], "max": [1, 2], "vline": [1, 2, 3], "red": [1, 2, 3, 4], "p_label": [1, 2], "f": [1, 2, 3, 4], "3f": [1, 2, 4], "1f": [1, 2], "fill_between": [1, 2], "y1": [1, 2], "pre": [1, 2], "facecolor": [1, 2], "hatch": [1, 2], "edgecolor": [1, 2], "lightgreen": [1, 2], "p_b": [1, 2, 3, 4], "post": [1, 2, 4], "lightpink": [1, 2], "n_": [1, 2, 3], "m_": [1, 2, 3], "p_value_1": 1, "round": [1, 2, 3], "care": [1, 3], "inconsist": 1, "shade": 1, "abov": [1, 2, 3, 4], "int_": [1, 2, 3], "infti": [1, 2, 3], "d": [1, 2, 3], "reject": 1, "less": 1, "chosen": 1, "idea": [1, 2, 5], "being": [1, 3], "were": [1, 2, 3, 4], "repeat": [1, 2, 3, 4], "measur": 1, "mani": [1, 2], "time": [1, 2, 3], "leq": [1, 2, 3], "exactli": 1, "intend": 1, "correspond": [1, 3], "deviat": 1, "awai": 1, "gaussian": [1, 3, 4], "phi": 1, "quantil": [1, 3], "easili": 1, "illustr": 1, "figur": [1, 3], "taken": 1, "varphi": 1, "ppf": [1, 3], "percent": 1, "point": [1, 2, 4], "z_1": 1, "52": 1, "sometim": [1, 4], "sigma": [1, 3, 4], "within": 1, "list": [1, 2, 3, 4], "goe": [1, 3], "q_0": 1, "usual": [1, 2, 3], "actual": 1, "h_0": [1, 2, 3], "_0": [1, 2, 3], "could": [1, 2, 3], "realli": 1, "lhc": [1, 5], "still": 1, "enough": [1, 2, 4], "too": 1, "high": [1, 2, 5], "discov": [1, 3], "earlier": [1, 4], "mistak": 1, "evid": 1, "todo": [1, 4], "check": [1, 4], "went": 1, "framework": [1, 2, 5], "vec": 1, "singl": 1, "rel": 1, "A": 1, "particularli": 1, "try": [1, 3, 5], "beyond": 1, "interv": [1, 3, 5], "test": [2, 3, 4, 5], "t_": [2, 3, 4], "signific": [2, 5], "machineri": 2, "extend": [2, 3], "straightforwardli": 2, "extract": 2, "g": [2, 3, 4], "68": 2, "95": [2, 3, 4], "similar": [2, 4], "must": 2, "contain": [2, 4], "cover": 2, "ensur": 2, "cl": [2, 3, 4], "s_": [2, 3], "pm": [2, 3], "scan": [2, 3], "rh": 2, "continu": [2, 3], "get_limit": 2, "s_scan": [2, 3, 4], "float": [2, 3, 4], "t_tilde_scan": 2, "save": [2, 3, 4], "t_obs_scan": 2, "p_val_scan": 2, "append": [2, 3, 4], "pv_cl_diff": [2, 3, 4], "ab": [2, 3, 4], "split": 2, "half": 2, "wai": [2, 3], "half_num_": [2, 3, 4], "s_low": [2, 3, 4], "argsort": [2, 3, 4], "s_high": [2, 3, 4], "05": [2, 3], "25": 2, "plot_2d_p_ts_": 2, "t_bin": 2, "21": 2, "t_tilde_hist": 2, "histogram": [2, 4], "mesh": 2, "plot_pval_level": 2, "t_lim": 2, "str": 2, "t_val": 2, "zip": 2, "clb": 2, "contour": 2, "02": [2, 3], "vmin": 2, "1e": 2, "hline": [2, 3], "black": [2, 3], "set_xlim": [2, 3], "22": [2, 3], "neyman": 2, "differ": [2, 3, 4], "plu": 2, "intersect": 2, "signifi": 2, "procedur": [2, 3], "invert": [2, 4], "along": 2, "subtleti": [2, 3], "rememb": [2, 4], "principl": 2, "computation": 2, "expens": 2, "practic": [2, 3, 4, 5], "trick": 2, "sensit": [2, 3, 4], "directli": [2, 3, 4], "boundari": 2, "modifi": 2, "q": [2, 3, 4], "geq": [2, 3], "indic": 2, "q_tilde_": [2, 3, 4], "upper_shat_mask": [2, 3, 4], "plot_ts_q": 2, "12": [2, 3], "60": 2, "As": [2, 3, 4], "mai": [2, 3, 4], "longer": 2, "behav": 2, "delta": 2, "averag": [2, 4], "fluctuat": 2, "plot_p_ts_q": 2, "xlim": 2, "chi2pdf": 2, "halfchi2pdf": 2, "80": [2, 4], "160": 2, "get_p_q": [2, 3, 4], "get_pval_q": [2, 3, 4], "q_tilde_ss": [2, 3, 4], "q_ob": [2, 3, 4], "get_upper_limit": 2, "q_tilde_scan": 2, "q_obs_scan": 2, "s_upper": [2, 3, 4], "s_upper_q": 2, "23": 2, "shift": 2, "slightli": 2, "bound": 2, "good": 2, "introduc": [2, 3, 5], "few": 2, "convent": 2, "relat": 2, "first": [2, 3, 4], "parametr": [2, 3, 4], "rightarrow": [2, 4], "repres": [2, 3, 4], "other": [2, 3], "motiv": 2, "littl": 2, "complet": [2, 4], "domin": 2, "draw": 2, "strong": 2, "conclus": 2, "70": 2, "043": 2, "aggress": 2, "undesir": 2, "lack": [2, 3], "behind": 2, "avoid": [2, 3], "both": [2, 3, 5], "short": 2, "criterion": [2, 3], "cfrac": [2, 3, 4], "sim": [2, 4], "On": 2, "hand": 2, "explicit": 2, "integr": 2, "unlik": 2, "greater": 2, "plot_pmu_pb": 2, "t_tilde_sb": [2, 3, 4], "p_mu": [2, 3, 4], "handl": 2, "get_legend_handles_label": 2, "lorder": 2, "new_handl": 2, "new_label": 2, "t_obs_b": 2, "14": 2, "higher": [2, 4], "second": [2, 4], "almost": 2, "overlap": 2, "closer": 2, "noncentr": 2, "get_limits_cl": [2, 3, 4], "p_cls_scan": [2, 3, 4], "get_upper_limit_cl": [2, 3, 4], "q_tilde_sb": [2, 3, 4], "looser": 2, "conserv": 2, "confirm": 2, "had": 2, "stai": 2, "further": 2, "concept": [2, 4, 5], "collect": 2, "confid": [3, 5], "upper": [3, 5], "lieu": 3, "get_toys_sb": [3, 4], "focus": 3, "how": [3, 4], "evalu": [3, 4], "result": 3, "equal": [3, 4], "character": 3, "run": 3, "concret": 3, "tell": 3, "calcul": 3, "exist": 3, "hopefulli": 3, "clearer": 3, "30000": [3, 4], "t_0": 3, "t_tilde_0": 3, "median_t0": 3, "median": 3, "nan_to_num": 3, "inf": 3, "t_tilde_00": 3, "wrt": 3, "newaxi": 3, "axi": [3, 4], "zs": 3, "median_z": 3, "plot_t0_s0": 3, "t_tilde0": 3, "plot_sign": 3, "hypothes": 3, "These": 3, "cumul": 3, "invari": 3, "monoton": 3, "transform": 3, "well": [3, 4], "wherea": 3, "similarli": 3, "84": 3, "98": 3, "82": 3, "anoth": 3, "benefit": 3, "merit": 3, "opposit": 3, "ask": 3, "definit": [3, 4], "furthermor": 3, "method": 3, "exp_": 3, "exp_b": 3, "q_tilde_s0": 3, "median_qs0": 3, "cl_": 3, "q_mu": 3, "p_muprim": 3, "pm1": 3, "pm2": 3, "50000": [3, 4], "relev": [3, 5], "qs0_quantil": 3, "closest": 3, "argmin": 3, "0f": [3, 4], "lightgrei": 3, "titl": [3, 4], "rl": 3, "ru": 3, "add_patch": 3, "patch": 3, "rectangl": 3, "yellow": 3, "lime": 3, "set_xtick": 3, "set_ytick": 3, "set_frame_on": 3, "colloqui": 3, "known": 3, "brazil": 3, "band": 3, "atla": [3, 5], "discoveri": 3, "mass": 3, "sm": 3, "2012": [3, 5], "hypothet": 3, "suggest": 3, "full": [3, 4], "person": 3, "access": 3, "skip": [3, 4], "beforehand": 3, "lot": 3, "develop": 3, "simul": 3, "specif": 3, "analysi": 3, "perform": 3, "simpler": 3, "been": 4, "nll": 4, "notic": 4, "neq": 4, "regardless": 4, "coincid": 4, "mathemat": 4, "It": [4, 5], "random": 4, "variabl": 4, "own": 4, "j": [4, 5], "becom": 4, "muh": 4, "xl": 4, "xr": 4, "std": 4, "gausian": 4, "welcom": 4, "ahead": 4, "some": [4, 5], "score": 4, "properti": 4, "Its": 4, "mathbb": 4, "e_": 4, "varianc": 4, "var": 4, "mathcal": 4, "invers": 4, "i_": 4, "ij": 4, "mu_i": 4, "mu_j": 4, "matrix": 4, "central": 4, "limit": [4, 5], "theorem": 4, "normal": 4, "term": 4, "order": 4, "o": 4, "xrightarrow": 4, "bigg": 4, "last": 4, "remaind": 4, "simplifi": 4, "get_fisher_mu_mu": 4, "captur": 4, "lose": 4, "smaller": 4, "pmatrix": 4, "bb": 4, "rigor": 4, "1d": 4, "simeq": 4, "law": 4, "sigma_": 4, "intuit": [4, 5], "interpret": 4, "scale": 4, "keep": 4, "close": 4, "get_asym_std": 4, "between": 4, "st": 4, "edg": 4, "midpoint": 4, "bin_width": 4, "toy_val": 4, "asym_v": 4, "sum": 4, "absolut": 4, "width": 4, "scatter": 4, "ticklabel_format": 4, "style": 4, "sci": 4, "scilimit": 4, "easier": 4, "linear": 4, "polyfit": 4, "poly1d": 4, "2e": 4, "versu": 4, "bs": 4, "2000": 4, "3000": 4, "5000": 4, "20000": 4, "70000": 4, "100000": 4, "abl": 4, "But": 4, "deal": 4, "naiv": 4, "bunch": 4, "defeat": 4, "purpos": 4, "saw": 4, "switch": 4, "oper": 4, "rewrit": 4, "Such": 4, "l_a": 4, "come": [4, 5], "soon": [4, 5], "seri": 5, "energi": 5, "primarili": 5, "me": 5, "understand": 5, "tool": 5, "highli": 5, "read": 5, "emphasi": 5, "heavili": 5, "implement": 5, "visual": 5, "python": 5, "ultim": 5, "help": 5, "build": 5, "plan": 5, "zfit": 5, "glen": 5, "cowan": 5, "kyle": 5, "cranmer": 5, "eilam": 5, "gross": 5, "ofer": 5, "vitel": 5, "eur": 5, "phy": 5, "c": 5, "71": 5, "1554": 5, "2011": 5, "erratum": 5, "73": 5, "2501": 5, "2013": 5, "arxiv": 5, "1007": 5, "1727": 5, "doi": 5, "1140": 5, "epjc": 5, "s10052": 5, "011": 5, "european": 5, "school": 5, "267": 5, "308": 5, "2014": 5, "1503": 5, "07622": 5, "5170": 5, "cern": 5, "003": 5, "carolin": 5, "stiller": 5, "baselin": 5, "assess": 5, "supplementari": 5, "commun": 5, "nutrit": 5, "intervent": 5, "studi": 5, "prevent": 5, "treatment": 5, "anemia": 5, "among": 5, "young": 5, "adivasi": 5, "children": 5, "west": 5, "bengal": 5, "india": 5, "phd": 5, "thesi": 5, "univers": 5, "hohenheim": 5, "2021": 5, "collabor": 5, "detector": 5, "lett": 5, "716": 5, "29": 5, "1207": 5, "7214": 5, "1016": 5, "physletb": 5, "08": 5, "020": 5}, "objects": {}, "objtypes": {}, "objnames": {}, "titleterms": {"introduct": [0, 4], "likelihood": [0, 4], "test": [0, 1], "statist": [0, 4], "data": 0, "model": 0, "profil": [0, 4], "ratio": [0, 4], "maximum": 0, "estim": [0, 4], "defin": 0, "plot": 0, "our": 0, "t_": [0, 1], "altern": 0, "summari": [0, 1, 2, 3], "hypothesi": 1, "upper": [1, 2], "limit": [1, 2, 3], "recap": [1, 2, 3, 4], "deriv": [1, 4], "p": 1, "s": 1, "observ": 1, "valu": 1, "signific": [1, 3], "signal": 1, "discoveri": 1, "confid": 2, "interv": 2, "cl_": 2, "method": 2, "note": 2, "expect": 3, "asymptot": 4, "formula": 4, "form": 4, "mle": 4, "background": 4, "lightn": 4, "fisher": 4, "inform": 4, "result": 4, "numer": 4, "asimov": 4, "dataset": 4, "stat": 5, "hep": 5, "bibliographi": 5}, "envversion": {"sphinx.domains.c": 2, "sphinx.domains.changeset": 1, "sphinx.domains.citation": 1, "sphinx.domains.cpp": 6, "sphinx.domains.index": 1, "sphinx.domains.javascript": 2, "sphinx.domains.math": 2, "sphinx.domains.python": 3, "sphinx.domains.rst": 2, "sphinx.domains.std": 2, "sphinx.ext.intersphinx": 1, "sphinxcontrib.bibtex": 9, "sphinx": 56}})