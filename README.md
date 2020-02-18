
# Codewind Node.js Profiler
=======

# Codewind Language Server for Node.js Profiling
![platforms](https://img.shields.io/badge/runtime-Java%20%7C%20Swift%20%7C%20Node-yellow.svg)
[![License](https://img.shields.io/badge/License-EPL%202.0-red.svg?label=license&logo=eclipse)](https://www.eclipse.org/legal/epl-2.0/)
[![Chat](https://img.shields.io/static/v1.svg?label=chat&message=mattermost&color=145dbf)](https://mattermost.eclipse.org/eclipse/channels/eclipse-codewind)

# Installing and running the Codewind language server for Node.js profiling
The Codewind language server for Node.js profiling annotates your Node.js code with code highlighting. Code highlighting uses the profiling data gathered through Codewind load testing to highlight and show the relative time that is spent in JavaScript functions.

![Demonstration of Code Highlighting](res/img/quick-demo.gif)

## Running the extension with Visual Studio Code (VS Code)
1. Open a local project that you created with [Codewind](https://www.eclipse.org/codewind/mdt-vsc-getting-started.html) and profiled by using the [performance test](https://www.eclipse.org/codewind/guide_performance.html) feature. Opening the project creates profiling data in a `load-test/[datestamp]/profiling.json` file in your Codewind project.
2. In VS Code, open a JavaScript file in your project. The extension highlights any lines that it finds in the profiling data and annotates them to show how often they were seen and where they were called from.

## Developing the extension with VS Code
1. Clone the `codewind-node-profiler` repository locally.
2. Run `npm install` in the cloned `codewind-node-profiler` folder. This command installs all necessary npm modules in both the client and server folder.
3. Open the clone of the `codewind-node-profiler` repository in VS Code.
4. Press **Ctrl**+**Shift**+**B** on Windows or **Cmd**+**Shift**+**B** on Mac to compile the client and server.
5. Switch to the **Debug** view.
6. Click **Launch Client** from the menu and click the **Run** icon.
7. If you want to debug the server and use the launch configuration, click **Attach to Server**.

## Testing
To enable testing, run the `npm install` command in the `codewind-node-profiler` folder.

Complete the following steps to test in VS Code:
1. Press **Ctrl**+**Shift**+**B** on Windows or **Cmd**+**Shift**+**B** on Mac to compile the client and server.
2. Run `npm run prepare-tests` in the `vscode/client` folder.
3. Switch to the **Debug** view.
4. Select **Language Server E2E Test** from the menu.
5. Run the test configuration.
6. Another editor opens while the tests are run. It automatically closes after the tests are complete.
7. Switch to the **Output** view with **Ctrl**+**Shift**+**U** on Windows and **Cmd**+**Shift+U** on Mac to see the test results.

## Building the extension
Complete the following steps to build a `.vsix` extension package that can then be installed and published:
1. Run `npm install` in the `codewind-node-profiler` folder.
2. Install the `vsce` package globally with `npm install -g vsce`.
3. Run `vsce package` in the `codewind-node-profiler` folder. A `vsix` file is generated.

### Prerequisites

- The Codewind extension (available [here](https://marketplace.visualstudio.com/items?itemName=IBM.codewind)) installed in Visual Studio Code.
- A Node.js project bound to Codewind.

### With Visual Studio Code

- Open your Node.js project's Performance Dashboard by right-clicking on the project in the Codewind section of Visual Studio Code and selecting `Open Performance Dashboard`.
- Once the Performance Dashboard opens, click `Run Load Test`.
- This will create profiling data in a `load-test/[datestamp]/profiling.json` file in your Codewind project.
- In Visual Studio Code open a JavaScript file in your project.
- The extension will highlight any lines which were found in the profiling data and annotate them to show how often they were seen and where they were called from.
=======
## Installing the extension
Complete the following steps to install the extension:
1. Run `code --install-extension <name of generated vsix file>` in the `codewind-node-profiler` folder.
2. Restart Visual Studio Code. The extension appears in your list of installed extensions.

For more information, see [Publishing Extension](https://code.visualstudio.com/api/working-with-extensions/publishing-extension) on the VS Code website.

