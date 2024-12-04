for i in $(seq -w 3 25); do
    dir="Day$i"
    mkdir "$dir"
    touch "$dir/Part01.js" "$dir/Part02.js" "$dir/input.txt" "$dir/Questions.md"

    echo "const readFile = require(\"../commons/readFile\");" >"$dir/Part01.js"
    echo "const lines = readFile(\"$dir/input.txt\").lines;" >>"$dir/Part01.js"

    echo "const readFile = require(\"../commons/readFile\");" >"$dir/Part02.js"
    echo "const lines = readFile(\"$dir/input.txt\").lines;" >>"$dir/Part02.js"

    echo "# Day $i Questions" >"$dir/Questions.md"
    echo "Add the questions for Day $i here." >>"$dir/Questions.md"
done
