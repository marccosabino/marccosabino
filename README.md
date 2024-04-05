<div>
<a href="https://github.com/marccosabino">
<img loading="lazy" height="180em" src="https://github-readme-stats.vercel.app/api?username=marccosabino&show_icons=true&theme=dracula&include_all_commits=true&count_private=true"/>
<img loading="lazy" height="180em" src="https://github-readme-stats.vercel.app/api/top-langs/?username=marccosabino&layout=compact&langs_count=7&theme=dracula"/>
</div>
  
  
<picture>
  <source media="(prefers-color-scheme: dark)" srcset="github-snake-dark.svg" />
  <source media="(prefers-color-scheme: light)" srcset="github-snake.svg" />
  <img alt="github-snake" src="github-snake.svg" />
</picture>

<div><
name: Generate Datas

<div
on:
  schedule: # execute every 12 hours
    - cron: "* */12 * * *"
  workflow_dispatch:
<div
jobs:
  build:
    name: Jobs to update datas
    runs-on: ubuntu-latest
    steps:
      # Snake Animation
      - uses: Platane/snk@master
      <  id: snake-gif
        with:
          github_user_name: seu-usuário-aqui
          svg_out_path: dist/github-contribution-grid-snake.svg
     <- uses: crazy-max/ghaction-github-pages@v2.1.3
       < with:
          target_branch: output
          build_dir: dist
        env:
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
    <
          
