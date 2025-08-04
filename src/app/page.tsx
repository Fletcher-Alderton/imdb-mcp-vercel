import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command";
import { 
  Play, 
  Zap, 
  Code, 
  Settings, 
  Database, 
  Globe, 
  Github, 
  ExternalLink,
  Copy,
  CheckCircle,
  AlertCircle,
  Info,
  Key
} from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      {/* Header */}
      <header className="border-b bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-sm">IMDB</span>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-slate-900 dark:text-white">
                  IMDb MCP Server
                </h1>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Deploy on Vercel in minutes
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Badge variant="secondary" className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                <CheckCircle className="w-3 h-3 mr-1" />
                Ready to Deploy
              </Badge>
              <Button variant="outline" size="sm">
                <Github className="w-4 h-4 mr-2" />
                View Source
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <Badge variant="outline" className="bg-blue-50 text-blue-700 dark:bg-blue-900/20 dark:text-blue-300">
              <Zap className="w-3 h-3 mr-1" />
              Powered by Vercel
            </Badge>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-6">
            Deploy Your IMDb MCP Server
            <span className="block text-blue-600 dark:text-blue-400">in Seconds</span>
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 mb-8 max-w-2xl mx-auto">
            A production-ready Model Context Protocol server for IMDb data, optimized for Vercel deployment with zero configuration.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                  <Play className="w-4 h-4 mr-2" />
                  Deploy to Vercel
                </Button>
              </AlertDialogTrigger>
              <AlertDialogContent className="sm:max-w-md">
                <AlertDialogHeader>
                  <AlertDialogTitle>Deploy to Vercel</AlertDialogTitle>
                  <AlertDialogDescription>
                    Enter your OMDB API key to deploy your IMDb MCP server. You can get a free API key from omdbapi.com
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <div className="space-y-4 py-4">
                  <div className="space-y-2">
                    <label htmlFor="omdb-key" className="text-sm font-medium flex items-center">
                      <Key className="w-4 h-4 mr-2" />
                      OMDB API Key
                    </label>
                    <Input
                      id="omdb-key"
                      placeholder="Enter your OMDB API key"
                      type="password"
                    />
                    <p className="text-xs text-slate-500">
                      Get your free API key from{" "}
                      <a href="https://www.omdbapi.com/apikey.aspx" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
                        omdbapi.com
                      </a>
                    </p>
                  </div>
                </div>
                <AlertDialogFooter>
                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                  <AlertDialogAction className="bg-blue-600 hover:bg-blue-700">
                    <Play className="w-4 h-4 mr-2" />
                    Deploy Now
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
            <Button variant="outline" size="lg">
              <Code className="w-4 h-4 mr-2" />
              View Documentation
            </Button>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Sidebar */}
          <aside className="lg:col-span-1">
            <Card className="sticky top-24">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Settings className="w-4 h-4 mr-2" />
                  Quick Start
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Button variant="ghost" className="w-full justify-start" size="sm">
                    <Database className="w-4 h-4 mr-2" />
                    API Overview
                  </Button>
                  <Button variant="ghost" className="w-full justify-start" size="sm">
                    <Globe className="w-4 h-4 mr-2" />
                    Deploy Guide
                  </Button>
                  <Button variant="ghost" className="w-full justify-start" size="sm">
                    <Code className="w-4 h-4 mr-2" />
                    Examples
                  </Button>
                </div>
                <Separator />
                <div className="text-sm text-slate-600 dark:text-slate-400">
                  <p className="font-medium mb-2">Requirements:</p>
                  <ul className="space-y-1 text-xs">
                    <li>• OMDB API Key</li>
                    <li>• Vercel Account</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </aside>

          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Deploy Section */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Zap className="w-5 h-5 mr-2 text-blue-600" />
                  One-Click Deploy
                </CardTitle>
                <CardDescription>
                  Deploy your IMDb MCP server to Vercel with just your OMDB API key
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-lg p-6 border border-blue-200 dark:border-blue-800">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Globe className="w-8 h-8 text-blue-600" />
                    </div>
                    <h4 className="font-semibold text-lg mb-2">Deploy to Vercel</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400 mb-6">
                      Get your IMDb MCP server running in production with automatic scaling and global CDN
                    </p>
                    <AlertDialog>
                      <AlertDialogTrigger asChild>
                        <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                          <Play className="w-4 h-4 mr-2" />
                          Deploy Now
                        </Button>
                      </AlertDialogTrigger>
                      <AlertDialogContent className="sm:max-w-md">
                        <AlertDialogHeader>
                          <AlertDialogTitle>Deploy to Vercel</AlertDialogTitle>
                          <AlertDialogDescription>
                            Enter your OMDB API key to deploy your IMDb MCP server. You can get a free API key from omdbapi.com
                          </AlertDialogDescription>
                        </AlertDialogHeader>
                        <div className="space-y-4 py-4">
                          <div className="space-y-2">
                            <label htmlFor="omdb-key-deploy" className="text-sm font-medium flex items-center">
                              <Key className="w-4 h-4 mr-2" />
                              OMDB API Key
                            </label>
                            <Input
                              id="omdb-key-deploy"
                              placeholder="Enter your OMDB API key"
                              type="password"
                            />
                            <p className="text-xs text-slate-500">
                              Get your free API key from{" "}
                              <a href="https://www.omdbapi.com/apikey.aspx" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
                                omdbapi.com
                              </a>
                            </p>
                          </div>
                        </div>
                        <AlertDialogFooter>
                          <AlertDialogCancel>Cancel</AlertDialogCancel>
                          <AlertDialogAction className="bg-blue-600 hover:bg-blue-700">
                            <Play className="w-4 h-4 mr-2" />
                            Deploy Now
                          </AlertDialogAction>
                        </AlertDialogFooter>
                      </AlertDialogContent>
                    </AlertDialog>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-green-100 dark:bg-green-900/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                      <CheckCircle className="w-6 h-6 text-green-600" />
                    </div>
                    <h5 className="font-semibold text-sm mb-1">Zero Configuration</h5>
                    <p className="text-xs text-slate-600 dark:text-slate-400">
                      Automatic setup with environment variables
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                      <Zap className="w-6 h-6 text-blue-600" />
                    </div>
                    <h5 className="font-semibold text-sm mb-1">Auto Scaling</h5>
                    <p className="text-xs text-slate-600 dark:text-slate-400">
                      Handles traffic spikes automatically
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                      <Globe className="w-6 h-6 text-purple-600" />
                    </div>
                    <h5 className="font-semibold text-sm mb-1">Global CDN</h5>
                    <p className="text-xs text-slate-600 dark:text-slate-400">
                      Fast response times worldwide
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* API Documentation */}
            <Card>
              <CardHeader>
                <CardTitle>API Endpoints</CardTitle>
                <CardDescription>
                  Two powerful tools for searching IMDb data
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="search-by-id" className="w-full">
                  <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="search-by-id">Search by ID/Title</TabsTrigger>
                    <TabsTrigger value="search-by-search">Search by Title</TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="search-by-id" className="space-y-4">
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold mb-2">Search IMDb by ID or Title</h4>
                        <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
                          Search IMDb database by IMDb ID or movie title with comprehensive parameters.
                        </p>
                      </div>
                      
                      <div className="space-y-3">
                        <div className="flex items-center space-x-2">
                          <Badge variant="secondary">POST</Badge>
                          <code className="text-sm bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded">
                            /api/mcp
                          </code>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <h5 className="font-medium text-sm mb-2">Parameters:</h5>
                            <div className="space-y-1 text-xs">
                              <div className="flex justify-between">
                                <code>i</code>
                                <span className="text-slate-600">IMDb ID</span>
                              </div>
                              <div className="flex justify-between">
                                <code>t</code>
                                <span className="text-slate-600">Movie title</span>
                              </div>
                              <div className="flex justify-between">
                                <code>type</code>
                                <span className="text-slate-600">Result type</span>
                              </div>
                              <div className="flex justify-between">
                                <code>y</code>
                                <span className="text-slate-600">Release year</span>
                              </div>
                            </div>
                          </div>
                          
                          <div>
                            <h5 className="font-medium text-sm mb-2">Example Request:</h5>
                            <div className="bg-slate-100 dark:bg-slate-800 rounded p-3">
                              <pre className="text-xs text-slate-800 dark:text-slate-200">
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
                  </TabsContent>
                  
                  <TabsContent value="search-by-search" className="space-y-4">
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold mb-2">Search IMDb by Search</h4>
                        <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
                          Search IMDb database by movie title with search parameters and pagination.
                        </p>
                      </div>
                      
                      <div className="space-y-3">
                        <div className="flex items-center space-x-2">
                          <Badge variant="secondary">POST</Badge>
                          <code className="text-sm bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded">
                            /api/mcp
                          </code>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <h5 className="font-medium text-sm mb-2">Parameters:</h5>
                            <div className="space-y-1 text-xs">
                              <div className="flex justify-between">
                                <code>s</code>
                                <span className="text-slate-600">Movie title (required)</span>
                              </div>
                              <div className="flex justify-between">
                                <code>type</code>
                                <span className="text-slate-600">Result type</span>
                              </div>
                              <div className="flex justify-between">
                                <code>page</code>
                                <span className="text-slate-600">Page number</span>
                              </div>
                              <div className="flex justify-between">
                                <code>y</code>
                                <span className="text-slate-600">Release year</span>
                              </div>
                            </div>
                          </div>
                          
                          <div>
                            <h5 className="font-medium text-sm mb-2">Example Request:</h5>
                            <div className="bg-slate-100 dark:bg-slate-800 rounded p-3">
                              <pre className="text-xs text-slate-800 dark:text-slate-200">
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
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>

            {/* Features */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Database className="w-5 h-5 mr-2 text-green-600" />
                    OMDB Integration
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
                    Direct integration with the OMDB API for comprehensive movie and TV show data.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center text-sm">
                      <CheckCircle className="w-4 h-4 mr-2 text-green-600" />
                      Real-time data access
                    </div>
                    <div className="flex items-center text-sm">
                      <CheckCircle className="w-4 h-4 mr-2 text-green-600" />
                      Multiple search methods
                    </div>
                    <div className="flex items-center text-sm">
                      <CheckCircle className="w-4 h-4 mr-2 text-green-600" />
                      Rich metadata support
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Zap className="w-5 h-5 mr-2 text-blue-600" />
                    Vercel Optimized
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
                    Built specifically for Vercel deployment with edge functions and serverless architecture.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center text-sm">
                      <CheckCircle className="w-4 h-4 mr-2 text-green-600" />
                      Zero configuration
                    </div>
                    <div className="flex items-center text-sm">
                      <CheckCircle className="w-4 h-4 mr-2 text-green-600" />
                      Automatic scaling
                    </div>
                    <div className="flex items-center text-sm">
                      <CheckCircle className="w-4 h-4 mr-2 text-green-600" />
                      Global CDN
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-br from-red-500 to-red-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xs">IMDB</span>
                </div>
                <span className="font-semibold">IMDb MCP Server</span>
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Production-ready MCP server for IMDb data, optimized for Vercel deployment.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-3">Resources</h4>
              <div className="space-y-2 text-sm">
                <a href="#" className="block text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white">
                  Documentation
                </a>
                <a href="#" className="block text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white">
                  API Reference
                </a>
                <a href="#" className="block text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white">
                  Examples
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-3">Support</h4>
              <div className="space-y-2 text-sm">
                <a href="#" className="block text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white">
                  GitHub Issues
                </a>
                <a href="#" className="block text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white">
                  Discord Community
                </a>
                <a href="#" className="block text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white">
                  Contact
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-3">Powered by</h4>
              <div className="space-y-2 text-sm">
                <a href="https://vercel.com" className="block text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white">
                  Vercel
                </a>
                <a href="https://nextjs.org" className="block text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white">
                  Next.js
                </a>
                <a href="https://modelcontextprotocol.io" className="block text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white">
                  MCP Protocol
                </a>
              </div>
            </div>
          </div>
          
          <Separator className="my-6" />
          
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <p className="text-sm text-slate-600 dark:text-slate-400">
              © 2024 IMDb MCP Server. Built with ❤️ for the MCP community.
            </p>
            <div className="flex items-center space-x-4">
              <Badge variant="outline" className="text-xs">
                MIT License
              </Badge>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
