<div>
<a href="https://github.com/marccosabino">
<img loading="lazy" height="180em" src="https://github-readme-stats.vercel.app/api?username=marccosabino&show_icons=true&theme=dracula&include_all_commits=true&count_private=true"/>
<img loading="lazy" height="180em" src="https://github-readme-stats.vercel.app/api/top-langs/?username=marccosabino&layout=compact&langs_count=7&theme=dracula"/>
</div>

- uses: Platane/snk@v3
  with:
  marccosabino: ${{ github.marccosabino }}
  outputs: |
      dist/github-snake.svg
      dist/github-snake-dark.svg?palette=github-dark
      dist/ocean.gif?color_snake=orange&color_dots=#bfd6f6,#8dbdff,#64a1f4,#4b91f1,#3c7dd9
  
<picture>
  <source media="(prefers-color-scheme: dark)" srcset="github-snake-dark.svg" />
  <source media="(prefers-color-scheme: light)" srcset="github-snake.svg" />
  <img alt="github-snake" src="github-snake.svg" />
</picture>
