import { z } from 'zod';
import { createMcpHandler } from 'mcp-handler';

const handler = createMcpHandler(
  (server) => {
    // Search by ID or Title
    server.tool(
      'Search IMDb by ID or Title',
      'Search IMDb database by IMDb ID or movie title with comprehensive parameters',
      {
        i: z.string().optional().describe('A valid IMDb ID (e.g. tt1285016)'),
        t: z.string().optional().describe('Movie title to search for'),
        type: z.enum(['movie', 'series', 'episode']).optional().describe('Type of result to return'),
        y: z.string().optional().describe('Year of release'),
        plot: z.enum(['short', 'full']).optional().describe('Return short or full plot (default: short)'),
        r: z.enum(['json', 'xml']).optional().describe('The data type to return (default: json)'),
        callback: z.string().optional().describe('JSONP callback name'),
        v: z.number().optional().describe('API version (reserved for future use, default: 1)'),
      },
      async ({ i, t, type, y, plot, r, callback, v }) => {
        // Validate that at least one of i or t is provided
        if (!i && !t) {
          throw new Error('At least one of "i" (IMDb ID) or "t" (title) is required');
        }

        const params = new URLSearchParams();
        
        if (i) params.append('i', i);
        if (t) params.append('t', t);
        if (type) params.append('type', type);
        if (y) params.append('y', y);
        if (plot) params.append('plot', plot);
        if (r) params.append('r', r);
        if (callback) params.append('callback', callback);
        if (v) params.append('v', v.toString());

        const response = await fetch(`https://www.omdbapi.com/?apikey=${process.env.OMDB_API_KEY}&${params.toString()}`);
        const data = await response.json();
        
        return {
          content: [{ type: 'text', text: JSON.stringify(data, null, 2) }],
        };
      },
    );

    // Search by Search
    server.tool(
      'Search IMDb by Search',
      'Search IMDb database by movie title with search parameters',
      {
        s: z.string().describe('Movie title to search for (required)'),
        type: z.enum(['movie', 'series', 'episode']).optional().describe('Type of result to return'),
        y: z.string().optional().describe('Year of release'),
        r: z.enum(['json', 'xml']).optional().describe('The data type to return (default: json)'),
        page: z.number().min(1).max(100).optional().describe('Page number to return (1-100, default: 1)'),
        callback: z.string().optional().describe('JSONP callback name'),
        v: z.number().optional().describe('API version (reserved for future use, default: 1)'),
      },
      async ({ s, type, y, r, page, callback, v }) => {
        const params = new URLSearchParams();
        
        params.append('s', s);
        if (type) params.append('type', type);
        if (y) params.append('y', y);
        if (r) params.append('r', r);
        if (page) params.append('page', page.toString());
        if (callback) params.append('callback', callback);
        if (v) params.append('v', v.toString());

        const response = await fetch(`https://www.omdbapi.com/?apikey=${process.env.OMDB_API_KEY}&${params.toString()}`);
        const data = await response.json();
        
        return {
          content: [{ type: 'text', text: JSON.stringify(data, null, 2) }],
        };
      },
    );
  },
  {},
  { basePath: '/api' },
);

export { handler as GET, handler as POST, handler as DELETE };