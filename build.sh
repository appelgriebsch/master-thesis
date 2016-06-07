#!/bin/bash
pdflatex MasterThesis.tex && \
makeindex -s MasterThesis.ist -t MasterThesis.glg -o MasterThesis.gls MasterThesis.glo && \
bibtex MasterThesis && \
pdflatex MasterThesis.tex
