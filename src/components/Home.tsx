import * as React from 'react';

import { Suggest } from '@blueprintjs/select';
import { RepoSelectProps, REPO_LIST, RepoProps } from './GitRepos';
import { MenuItem } from '@blueprintjs/core';

const RepoSuggest = Suggest.ofType<RepoProps>();

export interface SuggestReposState {
    closeOnSelect: boolean;
    repo: RepoProps;
    minimal: boolean;
    openOnKeyDown: boolean;
    usePortal: boolean;
    className: string;
}

export default class Home extends React.Component<RepoProps, SuggestReposState> {
    state: SuggestReposState = {
        closeOnSelect: true,
        repo: REPO_LIST[0],
        minimal: true,
        openOnKeyDown: false,
        usePortal: false,
        className: "repo-suggest-input"
    };

    render() {
        const { repo, minimal, usePortal, className, ...flags } = this.state;
        console.log(repo);
        return (
            <RepoSuggest
                {...RepoSelectProps}
                {...flags}
                inputValueRenderer={this.renderInputValue}
                noResults={<MenuItem disabled={true} text="No results." />}
                onItemSelect={this.handleValueChange}
                popoverProps={{ minimal, usePortal }}
                inputProps={{ className }}
                className="repo-suggest"
            />
        );
    }

    private renderInputValue = (repo: RepoProps) => repo.name;
    private handleValueChange = (repo: RepoProps) => this.setState({ repo });
}
