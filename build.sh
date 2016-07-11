#!/bin/bash
pdflatex -shell-escape MasterThesis.tex && \
makeindex -s MasterThesis.ist -t MasterThesis.glg -o MasterThesis.gls MasterThesis.glo && \
bibtex MasterThesis && \
pdflatex -shell-escape MasterThesis.tex
