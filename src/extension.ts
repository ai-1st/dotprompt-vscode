import * as vscode from 'vscode';
import { exec } from 'child_process';

export function activate(context: vscode.ExtensionContext) {
    let disposable = vscode.commands.registerCommand('dotprompt-vscode.run', () => {
        const editor = vscode.window.activeTextEditor;
        if (editor) {
            const document = editor.document;
            if (document.languageId === 'prompt' || document.fileName.endsWith('.prompt')) {
                const filePath = document.fileName;
                exec(`dotprompt "${filePath}"`, (error, stdout, stderr) => {
                    if (error) {
                        vscode.window.showErrorMessage(`Error: ${error.message}`);
                        return;
                    }
                    if (stderr) {
                        vscode.window.showErrorMessage(`Error: ${stderr}`);
                        return;
                    }
                    vscode.window.showInformationMessage(`Output: ${stdout}`);
                });
            } else {
                vscode.window.showWarningMessage('This is not a .prompt file');
            }
        }
    });

    context.subscriptions.push(disposable);
}

export function deactivate() {}

