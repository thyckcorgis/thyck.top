#!/bin/sh
for i in $@
do 
	filename=$(basename $i)
	filename=${filename%.*}
	mkdir -p $filename
	mv $i $filename/index.md
done
