# IMDb MCP - Model Context Protocol Server

A production-ready Model Context Protocol (MCP) server for IMDb data, designed for deployment on Vercel with seamless OMDB integration.

## 🎬 Features

- **Real-time IMDb Data Access**: Search movies and TV shows by ID, title, or keyword
- **OMDB API Integration**: Powered by the Open Movie Database API
- **Vercel Optimized**: Zero-configuration deployment with automatic scaling
- **MCP Protocol**: Standardized Model Context Protocol implementation
- **Comprehensive Search**: Support for movies, series, and episodes with rich metadata

## 🚀 Quick Deploy

1. **Get OMDB API Key**: Visit [omdbapi.com](https://omdbapi.com) and get your free API key
2. **Deploy to Vercel**: Click the deploy button below
3. **Configure Environment**: Add your OMDB API key to the environment variables
4. **Start Using**: Your MCP server is ready to use!

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/your-username/imdb-mcp-vercel)

## 📚 API Documentation

### Search by ID/Title
```json
{
  "name": "Search IMDb by ID or Title",
  "arguments": {
    "i": "tt1285016"
  }
}
```

### Search by Keyword
```json
{
  "name": "Search IMDb by Search",
  "arguments": {
    "s": "Batman",
    "type": "movie",
    "page": 1
  }
}
```

## 🛠️ Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## 🔧 Environment Variables

Create a `.env.local` file with your OMDB API key:

```env
OMDB_API_KEY=your_api_key_here
```

## 📦 Dependencies

- [Next.js 15](https://nextjs.org/) - React framework
- [Model Context Protocol SDK](https://github.com/modelcontextprotocol/sdk) - MCP implementation
- [OMDB API](https://omdbapi.com/) - Movie database
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [Radix UI](https://www.radix-ui.com/) - UI components

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🔗 Links

- [Model Context Protocol](https://modelcontextprotocol.io/)
- [OMDB API](https://omdbapi.com/)
- [Vercel](https://vercel.com/)
- [Next.js](https://nextjs.org/)

---

Built with ❤️ for the MCP community
