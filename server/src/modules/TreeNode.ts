/*******************************************************************************
 * Copyright (c) 2019 IBM Corporation and others.
 * All rights reserved. This program and the accompanying materials
 * are made available under the terms of the Eclipse Public License v2.0
 * which accompanies this distribution, and is available at
 * http://www.eclipse.org/legal/epl-v20.html
 *
 * Contributors:
 *     IBM Corporation - initial API and implementation
 *******************************************************************************/

export default class TreeNode {

  public static nodesMatch(treeNode: TreeNode, profileNode: TreeNode): boolean {
    if (treeNode.file === profileNode.file &&
      treeNode.name === profileNode.name &&
      treeNode.line === profileNode.line) {
      return true;
    }
    return false;
  }

  public count: number = 0;
  public childCount: number = 0;
  public parent: number;
  public parentNode: TreeNode;
  public children: TreeNode[] = [];
  public self: number;
  public file: string;
  public name: string;
  public line: number;
  public depth: number = 0;

  constructor(
    self: number, name: string, file: string, line: number, parent?: number, parentNode?: TreeNode,
  ) {
    this.self = self;
    this.name = name;
    this.file = file;
    this.line = line;
    this.parent = parent;
    this.parentNode = parentNode;
    this.depth = parentNode ? parentNode.depth + 1 : 0;
  }

  public addTicks(ticks: number): void {
    this.count += ticks;
    let nextParent: TreeNode = this.parentNode;
    while (nextParent) {
      nextParent.childCount += ticks;
      nextParent = nextParent.parentNode;
    }
  }
}
