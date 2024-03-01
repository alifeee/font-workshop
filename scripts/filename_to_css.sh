#!/bin/bash
# converts a font (.woff) filename to a CSS @font-face and class-selector based on filename
# example:
#  ./filename_to_css.sh "path/to/my-font.woff"
# with multiple files
#  find path/to/fonts -name "*.woff" -exec ./filename_to_css.sh {} \;

# get name from regex match
name_regex='\/([^\/]*)\.woff$'
if [[ $1 =~ $name_regex ]]; then
  name="${BASH_REMATCH[1]}"
else
  echo "Error: filename must end in .woff"
  exit 1
fi

# lowercase and replace spaces with hyphens
name_without_spaces=$(echo $name | tr '[:upper:]' '[:lower:]' | tr ' ' '-')

echo '@font-face {
  font-family: "'$name'";
  src: url("'$1'") format('woff');
}
.font--'$name_without_spaces' {
  font-family: "'$name'" !important;
}
'
