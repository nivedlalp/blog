import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

export default function DetailsMarkdown({ value, onChange }) {
    return (
        <div>
            {/* Markdown Editor */}
            <textarea
                value={value}
                onChange={(e) => onChange(e.target.value)}
                className="w-full border p-2 rounded mb-4"
                rows={6}
                placeholder="Write your description in Markdown..."
            />

            {/* Markdown Preview */}
            <div className="prose max-w-none prose-slate dark:prose-invert">
                <ReactMarkdown
                    remarkPlugins={[remarkGfm]}
                    components={{
                        a: ({ node, ...props }) => (
                            <a className="text-yellow-600 hover:underline" {...props} />
                        ),
                        h1: ({ node, ...props }) => <h1 className="text-4xl font-bold my-4" {...props} />,
                        h2: ({ node, ...props }) => <h2 className="text-3xl font-semibold my-3" {...props} />,
                        h3: ({ node, ...props }) => <h3 className="text-2xl font-semibold my-2" {...props} />,
                        pre: ({ node, ...props }) => (
                            <pre className="bg-gray-900 text-green-300 p-4 rounded-lg overflow-x-auto" {...props} />
                        ),
                        code: ({ node, inline, className, children, ...props }) => (
                            <code
                                className={`font-mono ${inline ? 'bg-gray-200 px-1 rounded' : ''}`}
                                {...props}
                            >
                                {children}
                            </code>
                        ),
                        img: ({ node, ...props }) => (
                            <img className="max-w-full rounded shadow my-2" {...props} />
                        ),
                        blockquote: ({ node, ...props }) => (
                            <blockquote className="border-l-4 border-yellow-400 pl-4 italic my-2" {...props} />
                        ),
                    }}
                >
                    {value}
                </ReactMarkdown>
            </div>
        </div>
    );
}
