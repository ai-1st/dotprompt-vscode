# This file was produced by https://github.com/ai-1st/dotprompt and shouldn't be edited directly.

# DotPrompt VSCode

## Introduction

DotPrompt VSCode is a Visual Studio Code extension that seamlessly integrates the dotprompt CLI with your development environment. It allows users to run .prompt files directly from VS Code, streamlining the workflow for developers working with AI-generated code using the DotPrompt paradigm.

## Features

- Run .prompt files directly from VS Code
- Seamless integration with the dotprompt CLI
- Syntax highlighting for .prompt files (coming soon)
- Quick access to DotPrompt functionality through VS Code commands

## Installation

To install the DotPrompt VSCode extension:

1. Open Visual Studio Code
2. Go to the Extensions view (Ctrl+Shift+X)
3. Search for "DotPrompt VSCode"
4. Click on the "Install" button

Alternatively, you can install it from the [VS Code Marketplace](https://marketplace.visualstudio.com/items?itemName=YourPublisherName.dotprompt-vscode).

## Usage

To use the DotPrompt VSCode extension:

1. Open a .prompt file in VS Code
2. Use one of the following methods to run the file:
   - Right-click in the editor and select "Run .prompt file" from the context menu
   - Use the Command Palette (Ctrl+Shift+P) and search for "Run .prompt file"
   - Use the keyboard shortcut Ctrl+Alt+R (customizable in VS Code settings)

The extension will execute the dotprompt CLI command on the current .prompt file and display the output in the VS Code terminal.

### Configuration

You can customize the extension's behavior in the VS Code settings:

- `dotpromptVSCode.cliPath`: Set the path to the dotprompt CLI executable if it's not in your system PATH
- `dotpromptVSCode.defaultArgs`: Specify default arguments to pass to the dotprompt command

## Requirements

- Visual Studio Code version 1.60.0 or higher
- dotprompt CLI installed and accessible in your system PATH

To install the dotprompt CLI, run:

```
pip3 install dotprompt-cli
```

## Known Issues

- The extension currently does not support running multiple .prompt files simultaneously
- Syntax highlighting for .prompt files is still in development

## Contributing

We welcome contributions to the DotPrompt VSCode extension! If you'd like to contribute, please follow these steps:

1. Fork the repository on GitHub
2. Create a new branch for your feature or bug fix
3. Make your changes and commit them with clear, descriptive messages
4. Push your changes to your fork
5. Submit a pull request to the main repository

For more details, please see our [CONTRIBUTING.md](https://github.com/yourusername/dotprompt-vscode/CONTRIBUTING.md) file.

## License

This extension is released under the MIT License. See the [LICENSE](https://github.com/yourusername/dotprompt-vscode/LICENSE) file for more details.

## Contact

For questions, suggestions, or support, please reach out to the extension author:

- Twitter: [@Mitek99](https://twitter.com/Mitek99)
- GitHub Issues: [https://github.com/yourusername/dotprompt-vscode/issues](https://github.com/yourusername/dotprompt-vscode/issues)

We appreciate your feedback and support in making DotPrompt VSCode a valuable tool for the community!