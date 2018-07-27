import { Icon, MenuItem } from "@blueprintjs/core";
import { ItemPredicate, ItemRenderer } from "@blueprintjs/select";
import { highlightText } from "../utilities/highlight_text";
import * as React from "react";

export interface RepoProps {
  id: number;
  name: string;
  owner: string;
  description: string;
  userCanAccess: boolean;
}

export const REPO_LIST: RepoProps[] = [
  {
    id: 1001,
    name: "/tools/repo-1.git",
    owner: "White Goodman",
    description: "The first repo in the list.",
    userCanAccess: false
  },
  {
    id: 1002,
    name: "/tools/repo-2.git",
    owner: "Peter LaFleur",
    description: "The second repo in the list.",
    userCanAccess: true
  },
  {
    id: 1003,
    name: "/tools/repo-3.git",
    owner: "Patches O'Houlihan",
    description: "The third repo in the list.",
    userCanAccess: false
  },
  {
    id: 1004,
    name: "/tools/repo-4.git",
    owner: "Steve the Pirate",
    description: "The fourth repo in the list.",
    userCanAccess: true
  }
];

export const renderRepo: ItemRenderer<RepoProps> = (repo, { handleClick, modifiers, query }) => {
  if (!modifiers.matchesPredicate) {
    return null;
  }
  const text = repo.name;
  return (
    <MenuItem
      active={modifiers.active}
      disabled={modifiers.disabled}
      labelElement={repo.userCanAccess ? "" : <Icon icon="lock" />}
      key={repo.id}
      onClick={handleClick}
      text={highlightText(text, query)}
      className="repo-menu-item"
    />
  );
};

export const filterRepo: ItemPredicate<RepoProps> = (query, repo) => {
  return repo.name.indexOf(query.toLowerCase()) >= 0;
};

export const RepoSelectProps = {
  itemPredicate: filterRepo,
  itemRenderer: renderRepo,
  items: REPO_LIST
};
