# 🇱🇹 Lithuania Carnival Games

Interactive carnival booth games for learning about Lithuania! Built for a school carnival event.

## 🎮 Games

### 🎯 Poke Quiz
Poke a box, answer a question! 41 questions about Lithuania covering:
- **Photo questions** with real Wikipedia images (landmarks, food, nature)
- **Flag identification** with tricky look-alike flags (Myanmar, Ethiopia, Ghana)
- **Multiple choice** & **True/False** covering history, culture, food, geography
- Trilingual support: English 🇬🇧 / Lithuanian 🇱🇹 / 中文 🇹🇼

### 🗺️ Find Lithuania on the Map
Click on the map of Europe to find Lithuania! Medium difficulty with distance scoring.

## 🚀 Deploy to GitHub Pages

1. Push this folder to a GitHub repository
2. Go to **Settings → Pages → Source → Deploy from branch (main)**
3. Your site will be live at `https://yourusername.github.io/repo-name/`

## 📁 Files

| File | Description |
|------|-------------|
| `index.html` | Landing page / game hub |
| `quiz.html` | Poke quiz game (41 questions) |
| `map.html` | Map guessing game |
| `europe.svg` | Europe map for the map game |

## 🎨 Design

- Warm cream theme (`#FBF6EC`) with Lithuanian flag colors
- `Outfit` + `Noto Sans TC` fonts
- Responsive layout for booth displays
- Language persists across pages via `localStorage`

## ⚠️ Notes

- Image questions use Wikipedia Commons thumbnails (requires internet)
- Language is saved in `localStorage` key `lt_quiz_lang`
