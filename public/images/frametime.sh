#!/usr/bin/env sh
for file in ${@:2}
do
	webpmux -duration $1 $file -o $file
done
