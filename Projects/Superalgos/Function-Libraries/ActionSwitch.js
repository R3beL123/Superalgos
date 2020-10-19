function newSuperalgosActionSwitch() {

    let thisObject = {
        executeAction: executeAction,
        initialize: initialize,
        finalize: finalize
    }

    let functionLibraryReferenceAttachDetach = newReferenceAttachDetach()
    let functionLibraryChainAttachDetach = newChainAttachDetach()
    let functionLibraryNodeDeleter = newNodeDeleter()
    let functionLibraryUiObjectsFromNodes = newUiObjectsFromNodes()
    let functionLibraryProtocolNode = newProtocolNode()
    let functionLibraryNodeCloning = newNodeCloning()
    let functionLibraryShortcutKeys = newShortcutKeys()
    let functionLibraryOnFocus = newOnFocus()
    let functionLibrarySuperScripts = newSuperScriptsFunctions()
    let functionLibraryWebhookFunctions = newWebhookFunctions()
    let functionLibraryDependenciesFilter = newDependenciesFilter()
    let functionLibraryNodePath = newNodePath()
    let functionLibraryTaskFunctions = newTaskFunctions()
    let functionLibrarySessionFunctions = newSessionFunctions()
    let functionLibraryCryptoEcosystemFunctions = newCryptoEcosystemFunctions()
    let functionLibraryDataMineFunctions = newDataMineFunctions()
    let functionLibraryDataStorageFunctions = newDataStorageFunctions()
    let functionLibraryChartingSpaceFunctions = newChartingSpaceFunctions()
    let functionLibraryPluginsFunctions = newPluginsFunctions()

    return thisObject

    function finalize() {
        functionLibraryReferenceAttachDetach = undefined
        functionLibraryChainAttachDetach = undefined
        functionLibraryNodeDeleter = undefined
        functionLibraryUiObjectsFromNodes = undefined
        functionLibraryProtocolNode = undefined
        functionLibraryNodeCloning = undefined
        functionLibraryShortcutKeys = undefined
        functionLibraryOnFocus = undefined
        functionLibrarySuperScripts = undefined
        functionLibraryWebhookFunctions = undefined
        functionLibraryDependenciesFilter = undefined
        functionLibraryNodePath = undefined
        functionLibraryTaskFunctions = undefined
        functionLibrarySessionFunctions = undefined
        functionLibraryCryptoEcosystemFunctions = undefined
        functionLibraryDataMineFunctions = undefined
        functionLibraryDataStorageFunctions = undefined
        functionLibraryChartingSpaceFunctions = undefined
        functionLibraryPluginsFunctions = undefined
    }

    function initialize() {
        /* Nothing to initialize since a Function Library does not hold any state. */
    }

    async function executeAction(action) {
        switch (action.name) {
            case 'Get Node On Focus': {
                return functionLibraryOnFocus.getNodeThatIsOnFocus(action.node)
            }

            case 'Get Node By Shortcut Key': {
                return functionLibraryShortcutKeys.getNodeByShortcutKey(action.node, action.extraParameter)
            }

            case 'Get Node Data Structure': {
                return functionLibraryProtocolNode.getProtocolNode(action.node, action.extraParameter, false, true, true, true)
            }

            case 'Create UI Object': {
                functionLibraryUiObjectsFromNodes.createUiObjectFromNode(action.node, undefined, undefined, action.extraParameter)
            }
                break
            case 'Connect Children to Reference Parents': {
                functionLibraryUiObjectsFromNodes.tryToConnectChildrenWithReferenceParents()
            }
                break
            case 'Get Node By Id': {
                return functionLibraryUiObjectsFromNodes.getNodeById(action.relatedNodeId)
            }

            case 'Syncronize Tasks': {
                functionLibraryUiObjectsFromNodes.syncronizeTasksFoundAtWorkspaceWithBackEnd(functionLibraryTaskFunctions)
            }
                break
            case 'Syncronize Sessions': {
                functionLibraryUiObjectsFromNodes.syncronizeSessionsFoundAtWorkspaceWithBackEnd(functionLibrarySessionFunctions)
            }
                break
            case 'Play Tutorials': {
                functionLibraryUiObjectsFromNodes.playTutorials()
            }
                break
            case 'Recreate Workspace': {
                functionLibraryUiObjectsFromNodes.recreateWorkspace(action.node, action.callBackFunction)
            }
                break
            case 'Delete Workspace': {
                functionLibraryNodeDeleter.deleteWorkspace(action.node, action.rootNodes)
            }
                break
            case 'Copy Node Path':
                {
                    let nodePath = functionLibraryNodePath.getNodePath(action.node)

                    copyTextToClipboard(nodePath)

                    canvas.cockpitSpace.setStatus(
                        nodePath + ' copied to the Clipboard.'
                        , 50, canvas.cockpitSpace.statusTypes.ALL_GOOD)
                }
                break
            case 'Add UI Object':
                {
                    functionLibraryUiObjectsFromNodes.addUIObject(action.node, action.relatedNodeType, action.rootNodes)
                }
                break
            case 'Add Missing Children':
                {
                    functionLibraryUiObjectsFromNodes.addMissingChildren(action.node)
                }
                break
            case 'Delete UI Object':
                {
                    functionLibraryNodeDeleter.deleteUIObject(action.node, action.rootNodes)
                }
                break
            case 'Edit Code':

                break
            case 'Share':
                {
                    let text = JSON.stringify(functionLibraryProtocolNode.getProtocolNode(action.node, true, false, true, true, true))

                    let nodeName = action.node.name
                    if (nodeName === undefined) {
                        nodeName = ''
                    } else {
                        nodeName = '.' + nodeName
                    }
                    let fileName = 'Share - ' + action.node.type + ' - ' + nodeName + '.json'
                    downloadText(fileName, text)
                }

                break
            case 'Backup':
                {
                    let text = JSON.stringify(functionLibraryProtocolNode.getProtocolNode(action.node, false, false, true, true, true))

                    let nodeName = action.node.name
                    if (nodeName === undefined) {
                        nodeName = ''
                    } else {
                        nodeName = ' ' + nodeName
                    }
                    let fileName = 'Backup - ' + action.node.type + ' - ' + nodeName + '.json'
                    downloadText(fileName, text)
                }

                break
            case 'Clone':
                {
                    let text = JSON.stringify(functionLibraryNodeCloning.getNodeClone(action.node))

                    let nodeName = action.node.name
                    if (nodeName === undefined) {
                        nodeName = ''
                    } else {
                        nodeName = ' ' + nodeName
                    }
                    let fileName = 'Clone - ' + action.node.type + ' - ' + nodeName + '.json'
                    downloadText(fileName, text)
                }

                break
            case 'Debug Task':
                {
                    functionLibraryTaskFunctions.runTask(action.node, functionLibraryProtocolNode, true, action.callBackFunction)
                }
                break
            case 'Run Task':
                {
                    functionLibraryTaskFunctions.runTask(action.node, functionLibraryProtocolNode, false, action.callBackFunction)
                }
                break
            case 'Stop Task':
                {
                    functionLibraryTaskFunctions.stopTask(action.node, functionLibraryProtocolNode, action.callBackFunction)
                }
                break
            case 'Run All Tasks':
                {
                    functionLibraryTaskFunctions.runAllTasks(action.node, functionLibraryProtocolNode)
                }
                break
            case 'Stop All Tasks':
                {
                    functionLibraryTaskFunctions.stopAllTasks(action.node, functionLibraryProtocolNode)
                }
                break
            case 'Run All Task Managers':
                {
                    functionLibraryTaskFunctions.runAllTaskManagers(action.node, functionLibraryProtocolNode)
                }
                break
            case 'Stop All Task Managers':
                {
                    functionLibraryTaskFunctions.stopAllTaskManagers(action.node, functionLibraryProtocolNode)
                }
                break
            case 'Run All Exchange Data Tasks':
                {
                    functionLibraryTaskFunctions.runAllExchangeDataTasks(action.node, functionLibraryProtocolNode)
                }
                break
            case 'Stop All Exchange Data Tasks':
                {
                    functionLibraryTaskFunctions.stopAllExchangeDataTasks(action.node, functionLibraryProtocolNode)
                }
                break
            case 'Run All Exchange Trading Tasks':
                {
                    functionLibraryTaskFunctions.runAllExchangeTradingTasks(action.node, functionLibraryProtocolNode)
                }
                break
            case 'Stop All Exchange Trading Tasks':
                {
                    functionLibraryTaskFunctions.stopAllExchangeTradingTasks(action.node, functionLibraryProtocolNode)
                }
                break
            case 'Run All Market Data Tasks':
                {
                    functionLibraryTaskFunctions.runAllMarketDataTasks(action.node, functionLibraryProtocolNode)
                }
                break
            case 'Stop All Market Data Tasks':
                {
                    functionLibraryTaskFunctions.stopAllMarketDataTasks(action.node, functionLibraryProtocolNode)
                }
                break
            case 'Run All Market Trading Tasks':
                {
                    functionLibraryTaskFunctions.runAllMarketTradingTasks(action.node, functionLibraryProtocolNode)
                }
                break
            case 'Stop All Market Trading Tasks':
                {
                    functionLibraryTaskFunctions.stopAllMarketTradingTasks(action.node, functionLibraryProtocolNode)
                }
                break
            case 'Run All Data Mine Tasks':
                {
                    functionLibraryTaskFunctions.runAllDataMineTasks(action.node, functionLibraryProtocolNode)
                }
                break
            case 'Stop All Data Mine Tasks':
                {
                    functionLibraryTaskFunctions.stopAllDataMineTasks(action.node, functionLibraryProtocolNode)
                }
                break
            case 'Run All Trading Mine Tasks':
                {
                    functionLibraryTaskFunctions.runAllTradingMineTasks(action.node, functionLibraryProtocolNode)
                }
                break
            case 'Stop All Trading Mine Tasks':
                {
                    functionLibraryTaskFunctions.stopAllTradingMineTasks(action.node, functionLibraryProtocolNode)
                }
                break
            case 'Add Missing Exchange Data Tasks':
                {
                    functionLibraryTaskFunctions.addMissingExchangeDataTasks(action.node, action.rootNodes, functionLibraryUiObjectsFromNodes)
                }
                break
            case 'Add Missing Market Data Tasks':
                {
                    functionLibraryTaskFunctions.addMissingMarketDataTasks(action.node, functionLibraryUiObjectsFromNodes)
                }
                break
            case 'Add Missing Data Mine Tasks':
                {
                    functionLibraryTaskFunctions.addMissingDataMineTasks(action.node, action.rootNodes, functionLibraryUiObjectsFromNodes)
                }
                break
            case 'Add Missing Exchange Trading Tasks':
                {
                    functionLibraryTaskFunctions.addMissingExchangeTradingTasks(action.node, action.rootNodes, functionLibraryUiObjectsFromNodes)
                }
                break
            case 'Add Missing Market Trading Tasks':
                {
                    functionLibraryTaskFunctions.addMissingMarketTradingTasks(action.node, functionLibraryUiObjectsFromNodes)
                }
                break
            case 'Add Missing Trading Mine Tasks':
                {
                    functionLibraryTaskFunctions.addMissingTradingMineTasks(action.node, action.rootNodes, functionLibraryUiObjectsFromNodes)
                }
                break
            case 'Add All Tasks':
                {
                    functionLibraryTaskFunctions.addAllTasks(action.node, action.rootNodes, functionLibraryUiObjectsFromNodes)
                }
                break
            case 'Add Missing Crypto Exchanges':
                {
                    functionLibraryCryptoEcosystemFunctions.addMissingExchanges(action.node, functionLibraryUiObjectsFromNodes)
                }
                break
            case 'Add Missing Assets':
                {
                    functionLibraryCryptoEcosystemFunctions.addMissingAssets(action.node, functionLibraryUiObjectsFromNodes)
                }
                break
            case 'Add Missing Markets':
                {
                    functionLibraryCryptoEcosystemFunctions.addMissingMarkets(action.node, functionLibraryUiObjectsFromNodes, functionLibraryNodeCloning)
                }
                break
            case 'Install Market':
                {
                    functionLibraryCryptoEcosystemFunctions.installMarket(action.node, action.rootNodes, functionLibraryUiObjectsFromNodes, functionLibraryNodeDeleter, functionLibraryChartingSpaceFunctions, functionLibraryDataStorageFunctions)
                }
                break
            case 'Uninstall Market':
                {
                    functionLibraryCryptoEcosystemFunctions.uninstallMarket(action.node, action.rootNodes, functionLibraryUiObjectsFromNodes, functionLibraryNodeDeleter, functionLibraryChartingSpaceFunctions, functionLibraryDataStorageFunctions)
                }
                break
            case 'Add All Output Datasets':
                {
                    functionLibraryDataMineFunctions.addAllOutputDatasets(action.node, functionLibraryUiObjectsFromNodes)
                }
                break
            case 'Add All Data Products':
                {
                    functionLibraryDataStorageFunctions.addAllDataProducts(action.node, functionLibraryUiObjectsFromNodes)
                }
                break
            case 'Add All Data Mine Products':
                {
                    functionLibraryDataStorageFunctions.addAllDataMineProducts(action.node, action.rootNodes, functionLibraryUiObjectsFromNodes)
                }
                break
            case 'Add All Trading Mine Products':
                {
                    functionLibraryDataStorageFunctions.addAllTradingMineProducts(action.node, action.rootNodes, functionLibraryUiObjectsFromNodes)
                }
                break
            case 'Add Missing Session References':
                {
                    functionLibraryDataStorageFunctions.addMissingSessionReferences(action.node, action.rootNodes, functionLibraryUiObjectsFromNodes)
                }
                break
            case 'Add Missing Market Data Products':
                {
                    functionLibraryDataStorageFunctions.addMissingMarketDataProducts(action.node, action.rootNodes, functionLibraryUiObjectsFromNodes)
                }
                break
            case 'Add Missing Market Trading Products':
                {
                    functionLibraryDataStorageFunctions.addMissingMarketTradingProducts(action.node, action.rootNodes, functionLibraryUiObjectsFromNodes)
                }
                break
            case 'Add Missing Exchange Trading Products':
                {
                    functionLibraryDataStorageFunctions.addMissingExchangeTradingProducts(action.node, action.rootNodes, functionLibraryUiObjectsFromNodes)
                }
                break
            case 'Add Missing Exchange Data Products':
                {
                    functionLibraryDataStorageFunctions.addMissingExchangeDataProducts(action.node, action.rootNodes, functionLibraryUiObjectsFromNodes)
                }
                break
            case 'Add All Data Dependencies':
                {
                    functionLibraryDataMineFunctions.addAllDataDependencies(action.node, functionLibraryUiObjectsFromNodes)
                }
                break
            case 'Add All Data Mine Dependencies':
                {
                    functionLibraryDataMineFunctions.addAllDataMineDataDependencies(action.node, action.rootNodes, functionLibraryUiObjectsFromNodes)
                }
                break
            case 'Add All Mine Layers':
                {
                    functionLibraryChartingSpaceFunctions.addAllMineLayers(action.node, action.rootNodes, functionLibraryUiObjectsFromNodes, functionLibraryNodeDeleter)
                }
                break
            case 'Add Missing Time Machines':
                {
                    functionLibraryChartingSpaceFunctions.addMissingTimeMachines(action.node, action.rootNodes, functionLibraryUiObjectsFromNodes, functionLibraryNodeDeleter)
                }
                break
            case 'Add Missing Dashboards':
                {
                    functionLibraryChartingSpaceFunctions.addMissingDashboards(action.node, action.rootNodes, functionLibraryUiObjectsFromNodes, functionLibraryNodeDeleter)
                }
                break
            case 'Play Tutorial':
                {
                    UI.projects.superalgos.spaces.tutorialSpace.playTutorial(action.node)
                }
                break
            case 'Play Tutorial Topic':
                {
                    UI.projects.superalgos.spaces.tutorialSpace.playTutorialTopic(action.node)
                }
                break
            case 'Play Tutorial Step':
                {
                    UI.projects.superalgos.spaces.tutorialSpace.playTutorialStep(action.node)
                }
                break
            case 'Resume Tutorial':
                {
                    UI.projects.superalgos.spaces.tutorialSpace.resumeTutorial(action.node)
                }
                break
            case 'Resume Tutorial Topic':
                {
                    UI.projects.superalgos.spaces.tutorialSpace.resumeTutorialTopic(action.node)
                }
                break
            case 'Resume Tutorial Step':
                {
                    UI.projects.superalgos.spaces.tutorialSpace.resumeTutorialStep(action.node)
                }
                break
            case 'Reset Tutorial Progress':
                {
                    UI.projects.superalgos.spaces.tutorialSpace.resetTutorialProgress(action.node)
                }
                break
            case 'Send Webhook Test Message':
                {
                    functionLibraryWebhookFunctions.sendTestMessage(action.node, action.callBackFunction)
                }
                break
            case 'Run Session':
                {
                    functionLibrarySessionFunctions.runSession(action.node, functionLibraryProtocolNode, functionLibraryDependenciesFilter, false, action.callBackFunction)
                }
                break
            case 'Resume Session':
                {
                    functionLibrarySessionFunctions.runSession(action.node, functionLibraryProtocolNode, functionLibraryDependenciesFilter, true, action.callBackFunction)
                }
                break
            case 'Stop Session':
                {
                    functionLibrarySessionFunctions.stopSession(action.node, functionLibraryProtocolNode, action.callBackFunction)
                }
                break
            case 'Run Super Action':
                {
                    functionLibrarySuperScripts.runSuperScript(action.node, action.rootNodes, functionLibraryNodeCloning, functionLibraryUiObjectsFromNodes, functionLibraryNodeDeleter)
                }
                break
            case 'Parent Attach': {
                functionLibraryChainAttachDetach.chainAttachNode(action.node, action.relatedNode, action.rootNodes)
            }
                break
            case 'Reference Attach': {
                functionLibraryReferenceAttachDetach.referenceAttachNode(action.node, action.relatedNode, action.rootNodes)
            }
                break
            case 'Parent Detach':
                {
                    functionLibraryChainAttachDetach.chainDetachNode(action.node, action.rootNodes)
                }
                break
            case 'Reference Detach':
                {
                    functionLibraryReferenceAttachDetach.referenceDetachNode(action.node)
                }
                break
            case 'Push Code to Javascript Code':
                {
                    action.node.javascriptCode.code = action.node.code
                }
                break
            case 'Fetch Code to Javascript Code':
                {
                    action.node.code = action.node.javascriptCode.code
                }
                break
            case 'Open Documentation':
                {
                    let definition = getNodeDefinition(action.node)
                    if (definition !== undefined) {
                        if (definition.docURL !== undefined) {
                            UI.projects.superalgos.spaces.docSpace.navigateTo(definition.docURL)
                        } else {
                            let headName = getHiriarchyHead(action.node).type
                            headName = headName.toLowerCase()
                            headName = headName.split(" ").join("-")
                            let nodeName = action.node.type
                            nodeName = nodeName.toLowerCase()
                            nodeName = nodeName.split(" ").join("-")
                            url = DOCUMENTATION_URL_PREFIX + "suite-hierarchy-" + headName + ".html#" + nodeName
                            UI.projects.superalgos.spaces.docSpace.navigateTo(url)
                        }
                    }
                }
                break
            case 'Add Missing Plugin Projects':
                {
                    functionLibraryPluginsFunctions.pluginMissingProjects(action.node, action.rootNodes, functionLibraryUiObjectsFromNodes)
                }
                break
            case 'Add Missing Plugin Data Mines':
                {
                    functionLibraryPluginsFunctions.pluginMissingDataMines(action.node, action.rootNodes, functionLibraryUiObjectsFromNodes)
                }
                break
            case 'Add Missing Plugin Trading Mines':
                {
                    functionLibraryPluginsFunctions.pluginMissingTradingMines(action.node, action.rootNodes, functionLibraryUiObjectsFromNodes)
                }
                break
            case 'Add Missing Plugin Trading Systems':
                {
                    functionLibraryPluginsFunctions.pluginMissingTradingSystems(action.node, action.rootNodes, functionLibraryUiObjectsFromNodes)
                }
                break
            case 'Add Missing Plugin Trading Engines':
                {
                    functionLibraryPluginsFunctions.pluginMissingTradingEngines(action.node, action.rootNodes, functionLibraryUiObjectsFromNodes)
                }
                break
            case 'Add Missing Plugin Super Scripts':
                {
                    functionLibraryPluginsFunctions.pluginMissingSuperScripts(action.node, action.rootNodes, functionLibraryUiObjectsFromNodes)
                }
                break
            case 'Add Missing Plugin Tutorials':
                {
                    functionLibraryPluginsFunctions.pluginMissingTutorials(action.node, action.rootNodes, functionLibraryUiObjectsFromNodes)
                }
                break
        }
    }
}
