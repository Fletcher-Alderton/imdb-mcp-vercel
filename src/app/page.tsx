import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Play, 
  Zap, 
  Code, 
  Database, 
  Globe, 
  Github, 
  CheckCircle,
  Key,
  ArrowRight
} from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Main Content */}
      <main className="p-0">
        <div className="w-full border-4 border-black full-width-container">
          {/* Header Section */}
          <div className="grid grid-cols-2 border-b-4 border-black">
            <div className="space-y-6 p-12 border-r-4 border-black">
              <h2 className="text-4xl font-bold text-black tracking-wide">
                Welcome to IMDB MCP
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Deploy a production-ready Model Context Protocol server for IMDb data on Vercel. 
                Access comprehensive movie and TV show information through a clean, efficient API.
              </p>
            </div>
            <div className="p-12 flex items-center justify-center">
              <a href="https://github.com/imdb-mcp" target="_blank" rel="noopener noreferrer">
                <Button className="bg-black text-white hover:bg-gray-800 border-0 px-8 py-3 rounded-none hover:cursor-pointer">
                  <Github className="w-4 h-4 mr-2" />
                  View on GitHub
                </Button>
              </a>
            </div>
          </div>

          {/* API Key Section */}
          <div className="border-b-4 border-black">
            <div className="max-w-4xl mx-auto flex items-center justify-center p-12">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-black">Get OMDB API Key</h3>
                <p className="text-gray-600">
                  You need a free OMDB API key before deploying. <br /> The process is simple and requires no credit card.
                </p>
                <div className="space-y-4">
                  <div className="text-sm text-gray-600 space-y-2">
                    <div>1. Visit omdbapi.com</div>
                    <div>2. Click "Get API Key"</div>
                    <div>3. Check your email</div>
                    <div>4. Copy the key</div>
                  </div>
                  <Button className="bg-black text-white hover:bg-gray-800 border-0 px-8 py-3 rounded-none hover:cursor-pointer">
                    <Key className="w-4 h-4 mr-2" />
                    Get Free API Key
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Deploy Section */}
          <div className="grid grid-cols-2 border-b-4 border-black">
            <div className="flex items-center justify-center p-12 border-r-4 border-black">
              
            </div>
            <div className="space-y-6 p-12">
              <h3 className="text-2xl font-bold text-black">Deploy to Vercel</h3>
              <p className="text-gray-600">
                One-click deployment with your OMDB API key. Zero configuration required.
              </p>
              <Button className="bg-black text-white hover:bg-gray-800 border-0 px-8 py-3 rounded-none hover:cursor-pointer">
                <Zap className="w-4 h-4 mr-2" />
                Deploy
              </Button>
            </div>
          </div>

          {/* API Documentation */}
          <div className="border-b-4 border-black">
            <div className="space-y-0">
              <div className="text-center p-12 border-b-4 border-black">
                <h3 className="text-3xl font-bold text-black mb-4">API Endpoints</h3>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Two powerful tools for searching IMDb data with comprehensive parameters and real-time access.
                </p>
              </div>
              
              <div className="grid grid-cols-2">
                {/* Search by ID/Title */}
                <div className="space-y-6 p-12 border-r-4 border-black">
                  <div className="border-black">
                    <h4 className="text-xl font-bold text-black mb-4">Search by ID/Title</h4>
                    <p className="text-gray-600 mb-6">
                      Search by IMDb ID or movie title with comprehensive parameters for detailed information.
                    </p>
                    
                    <div className="space-y-4">
                      <div className="flex items-center space-x-2 mb-4">
                        <Badge variant="secondary">POST</Badge>
                        <code className="text-sm bg-gray-100 px-3 py-1">/api/mcp</code>
                      </div>
                      
                      <div className="space-y-4">
                        <div>
                          <h5 className="font-medium text-sm mb-3 text-black">Parameters:</h5>
                          <div className="space-y-2 text-sm">
                            <div className="flex justify-between items-center">
                              <code className="bg-gray-100 px-2 py-1">i</code>
                              <span className="text-gray-600">IMDb ID (e.g., tt1285016)</span>
                            </div>
                            <div className="flex justify-between items-center">
                              <code className="bg-gray-100 px-2 py-1">t</code>
                              <span className="text-gray-600">Movie title</span>
                            </div>
                            <div className="flex justify-between items-center">
                              <code className="bg-gray-100 px-2 py-1">type</code>
                              <span className="text-gray-600">movie, series, episode</span>
                            </div>
                            <div className="flex justify-between items-center">
                              <code className="bg-gray-100 px-2 py-1">y</code>
                              <span className="text-gray-600">Release year</span>
                            </div>
                          </div>
                        </div>
                        
                        <div>
                          <h5 className="font-medium text-sm mb-3 text-black">Example Request:</h5>
                          <div className="bg-gray-100 p-4">
                            <pre className="text-xs text-gray-800">
{`{
  "name": "Search IMDb by ID or Title",
  "arguments": {
    "i": "tt1285016"
  }
}`}
                            </pre>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Search by Search */}
                <div className="space-y-6 p-12">
                  <div className="border-black">
                    <h4 className="text-xl font-bold text-black mb-4">Search by Search</h4>
                    <p className="text-gray-600 mb-6">
                      Search by movie title with pagination for discovering multiple results.
                    </p>
                    
                    <div className="space-y-4">
                      <div className="flex items-center space-x-2 mb-4">
                        <Badge variant="secondary">POST</Badge>
                        <code className="text-sm bg-gray-100 px-3 py-1">/api/mcp</code>
                      </div>
                      
                      <div className="space-y-4">
                        <div>
                          <h5 className="font-medium text-sm mb-3 text-black">Parameters:</h5>
                          <div className="space-y-2 text-sm">
                            <div className="flex justify-between items-center">
                              <code className="bg-gray-100 px-2 py-1">s</code>
                              <span className="text-gray-600">Movie title (required)</span>
                            </div>
                            <div className="flex justify-between items-center">
                              <code className="bg-gray-100 px-2 py-1">type</code>
                              <span className="text-gray-600">movie, series, episode</span>
                            </div>
                            <div className="flex justify-between items-center">
                              <code className="bg-gray-100 px-2 py-1">page</code>
                              <span className="text-gray-600">Page number (1-100)</span>
                            </div>
                            <div className="flex justify-between items-center">
                              <code className="bg-gray-100 px-2 py-1">y</code>
                              <span className="text-gray-600">Release year</span>
                            </div>
                          </div>
                        </div>
                        
                        <div>
                          <h5 className="font-medium text-sm mb-3 text-black">Example Request:</h5>
                          <div className="bg-gray-100 p-4">
                            <pre className="text-xs text-gray-800">
{`{
  "name": "Search IMDb by Search",
  "arguments": {
    "s": "Batman",
    "type": "movie",
    "page": 1
  }
}`}
                            </pre>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-2">
            <div className="space-y-6 p-12 border-r-4 border-black w-1/2">
              <h3 className="text-2xl font-bold text-black">OMDB Integration</h3>
              <div className="space-y-4">
                <div className="flex items-center text-sm">
                  <div className="w-2 h-2 bg-black mr-3"></div>
                  Real-time data access
                </div>
                <div className="flex items-center text-sm">
                  <div className="w-2 h-2 bg-black mr-3"></div>
                  Multiple search methods
                </div>
                <div className="flex items-center text-sm">
                  <div className="w-2 h-2 bg-black mr-3"></div>
                  Rich metadata support
                </div>
              </div>
            </div>
            <div className="space-y-6 p-12 w-1/2">
              <h3 className="text-2xl font-bold text-black">Vercel Optimized</h3>
              <div className="space-y-4">
                <div className="flex items-center text-sm">
                  <div className="w-2 h-2 bg-black mr-3"></div>
                  Zero configuration
                </div>
                <div className="flex items-center text-sm">
                  <div className="w-2 h-2 bg-black mr-3"></div>
                  Automatic scaling
                </div>
                <div className="flex items-center text-sm">
                  <div className="w-2 h-2 bg-black mr-3"></div>
                  Global CDN
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
