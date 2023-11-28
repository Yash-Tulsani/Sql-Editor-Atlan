"use client"
import React, { useEffect, useRef, useContext, useState } from "react";
import Editor, { Monaco } from "@monaco-editor/react";
import { SqlContext } from "@/Context/SqlContext";

const SqlCodeEditor = () => {
  const editorRef = useRef(null);

  // Global States
  const {theme,openedQueryTabs,selectedTab,editorCode,setEditorCode,setIsPageLoading}=useContext(SqlContext);

  // Side Effects
  useEffect(()=>{
    const queryCode=openedQueryTabs[selectedTab].code;
    setEditorCode(queryCode);
  },[])

  useEffect(()=>{
    const queryCode=openedQueryTabs[selectedTab].code;
    setEditorCode(queryCode);
  },[selectedTab])

  // Event Handlers
  const handleCodeChange=(e)=>{
    setEditorCode(e);
  }

  function handleEditorDidMount(editor, monaco) {
    editorRef.current = editor;
     // Define SQL language
     monaco.languages.register({ id: 'sql' });

     // Set language configuration for SQL
     monaco.languages.setLanguageConfiguration('sql', {
       comments: {
         lineComment: '--',
         blockComment: ['/*', '*/'],
       },
       brackets: [
         ['{', '}'],
         ['[', ']'],
         ['(', ')'],
       ],
       autoClosingPairs: [
         { open: '[', close: ']' },
         { open: '{', close: '}' },
         { open: '(', close: ')' },
         { open: '"', close: '"', notIn: ['string'] },
         { open: "'", close: "'", notIn: ['string', 'comment'] },
       ],
     });
 
     // Set syntax highlighting rules for SQL
     monaco.languages.setMonarchTokensProvider('sql', {
       tokenizer: {
         root: [
           // Define SQL syntax highlighting rules here
           // For example:
           [/\b(SELECT|FROM|WHERE|AND|OR)\b/, 'keyword'],
           [/\b[0-9]+\b/, 'number'],
           [/'[^']*'/, 'string'],
           [/".*"/, 'string'],
           [/\/\/.*$/, 'comment'],
           [/--.*$/, 'comment'],
         ],
       },
     });

     monaco.languages.registerCompletionItemProvider('sql', {
        provideCompletionItems: (model, position) => {
          return {
            suggestions: [
              // SQL Keywords
              { label: 'SELECT', kind: monaco.languages.CompletionItemKind.Keyword, insertText: 'SELECT' },
              { label: 'FROM', kind: monaco.languages.CompletionItemKind.Keyword, insertText: 'FROM' },
              { label: 'WHERE', kind: monaco.languages.CompletionItemKind.Keyword, insertText: 'WHERE' },
              { label: 'AND', kind: monaco.languages.CompletionItemKind.Keyword, insertText: 'AND' },
              { label: 'OR', kind: monaco.languages.CompletionItemKind.Keyword, insertText: 'OR' },
              { label: 'BETWEEN', kind: monaco.languages.CompletionItemKind.Keyword, insertText: 'BETWEEN' },
              { label: 'IN', kind: monaco.languages.CompletionItemKind.Keyword, insertText: 'IN' },
              { label: 'GROUP BY', kind: monaco.languages.CompletionItemKind.Keyword, insertText: 'GROUP BY' },
              { label: 'ORDER BY', kind: monaco.languages.CompletionItemKind.Keyword, insertText: 'ORDER BY' },
              { label: 'ON', kind: monaco.languages.CompletionItemKind.Keyword, insertText: 'ON' },
              { label: 'LEFT JOIN', kind: monaco.languages.CompletionItemKind.Keyword, insertText: 'LEFT JOIN' },
              { label: 'RIGHT JOIN', kind: monaco.languages.CompletionItemKind.Keyword, insertText: 'RIGHT JOIN' },
              { label: 'INNER JOIN', kind: monaco.languages.CompletionItemKind.Keyword, insertText: 'INNER JOIN' },
              { label: 'HAVING', kind: monaco.languages.CompletionItemKind.Keyword, insertText: 'HAVING' },
              { label: 'INSERT INTO', kind: monaco.languages.CompletionItemKind.Keyword, insertText: 'INSERT INTO' },
              { label: 'UPDATE', kind: monaco.languages.CompletionItemKind.Keyword, insertText: 'UPDATE' },
              { label: 'DELETE FROM', kind: monaco.languages.CompletionItemKind.Keyword, insertText: 'DELETE FROM' },
              // Add more SQL keywords...
  
              // SQL Functions
              { label: 'COUNT()', kind: monaco.languages.CompletionItemKind.Function, insertText: 'COUNT()' },
              { label: 'MAX()', kind: monaco.languages.CompletionItemKind.Function, insertText: 'MAX()' },
              { label: 'MIN()', kind: monaco.languages.CompletionItemKind.Function, insertText: 'MIN()' },
              { label: 'AVG()', kind: monaco.languages.CompletionItemKind.Function, insertText: 'AVG()' },
              { label: 'SUM()', kind: monaco.languages.CompletionItemKind.Function, insertText: 'SUM()' },
              { label: 'CONCAT()', kind: monaco.languages.CompletionItemKind.Function, insertText: 'CONCAT()' },
              { label: 'SUBSTRING()', kind: monaco.languages.CompletionItemKind.Function, insertText: 'SUBSTRING()' },
              { label: 'DATE()', kind: monaco.languages.CompletionItemKind.Function, insertText: 'DATE()' },
              { label: 'NOW()', kind: monaco.languages.CompletionItemKind.Function, insertText: 'NOW()' },
              { label: 'YEAR()', kind: monaco.languages.CompletionItemKind.Function, insertText: 'YEAR()' },
              // Add more SQL functions...
  
              // Sample Table Names
              { label: 'users', kind: monaco.languages.CompletionItemKind.Class, insertText: 'users' },
              { label: 'orders', kind: monaco.languages.CompletionItemKind.Class, insertText: 'orders' },
              { label: 'products', kind: monaco.languages.CompletionItemKind.Class, insertText: 'products' },
              // Add more table names...
  
              // Sample Column Names
              { label: 'id', kind: monaco.languages.CompletionItemKind.Field, insertText: 'id' },
              { label: 'name', kind: monaco.languages.CompletionItemKind.Field, insertText: 'name' },
              { label: 'email', kind: monaco.languages.CompletionItemKind.Field, insertText: 'email' },
              // Add more column names...
            ],
          };
        },
      });
  }

  useEffect(() => {
    if (editorRef.current) {
      const editorInstance = editorRef.current;
      const monacoInstance = editorInstance.__emitter._instance.getGlobalMonaco();
      
      // Create Monaco editor model with SQL content
      const model = monacoInstance.editor.createModel(
        'SELECT * FROM tableName WHERE condition;',
        'sql'
      );

      // Set the model for the editor instance
      editorInstance.setModel(model);
    }
  }, []);

  return (
      <Editor
        height="100%"
        defaultLanguage="sql"
        defaultValue={editorCode}
        value={editorCode}
        onMount={handleEditorDidMount}
        theme={theme=='dark'?"vs-dark":"light"}
        className="sql-playground-code-editor"
        onChange={handleCodeChange}
      />
  );
};

export default SqlCodeEditor;
