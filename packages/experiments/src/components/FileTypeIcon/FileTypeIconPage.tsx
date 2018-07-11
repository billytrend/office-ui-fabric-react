import * as React from 'react';
import { ExampleCard, IComponentDemoPageProps, ComponentPage } from '@uifabric/example-app-base';

import { FileTypeIconBasicExample } from './examples/FileTypeIcon.Basic.Example';
const FileTypeIconBasicExampleCode = require('!raw-loader!@uifabric/experiments/src/components/FileTypeIcon/examples/FileTypeIcon.Basic.Example.tsx') as string;

export class FileTypeIconPage extends React.Component<IComponentDemoPageProps, {}> {
  public render(): JSX.Element {
    return (
      <ComponentPage
        title="FileTypeIcon"
        componentName="FileTypeIcon"
        exampleCards={
          <div>
            <ExampleCard title="File Type Icon" isOptIn={true} code={FileTypeIconBasicExampleCode}>
              <FileTypeIconBasicExample />
            </ExampleCard>
          </div>
        }
        overview={<div />}
        bestPractices={<div />}
        dos={
          <div>
            <ul>
              <li>Use document icons to indicate to users that they are creating a new document of that type.</li>
              <li>
                Make sure that a document of the type that the icon represents loads when the user selects the icon.
              </li>
            </ul>
          </div>
        }
        donts={
          <div>
            <ul>
              <li>
                Use document icons to represent non-Microsoft Office documents, such as a Word .docx icon to open a .txt
                file.
              </li>
            </ul>
          </div>
        }
        isHeaderVisible={this.props.isHeaderVisible}
      />
    );
  }
}
