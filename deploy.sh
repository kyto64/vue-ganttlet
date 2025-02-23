set -e

npm run docs:build
cd docs/.vuepress/dist

git init
git add -A
git commit -m 'deploy'

git push -f git@github.com:kyto64/vue-ganttlet.git master:gh-pages

cd -