#!/usr/bin/env sh
for file in $@
do
	webpmux -duration 225,0 $file -o $file
	webpmux -duration 75,1,11 $file -o $file
	webpmux -duration 300,12 $file -o $file
	webpmux -duration 75,13,0 $file -o $file
done
