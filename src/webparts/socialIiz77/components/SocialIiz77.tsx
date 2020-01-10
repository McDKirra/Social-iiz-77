import * as React from 'react';
import styles from './SocialIiz77.module.scss';
import { ISocialIiz77Props } from './ISocialIiz77Props';
import { escape } from '@microsoft/sp-lodash-subset';

export default class SocialIiz77 extends React.Component<ISocialIiz77Props, {}> {
  public render(): React.ReactElement<ISocialIiz77Props> {
    return (
      <div className={ styles.socialIiz77 }>
        <div className={ styles.container }>
          <div className={ styles.row }>
            <div className={ styles.column }>
              <span className={ styles.title }>Welcome to SharePoint!</span>
              <p className={ styles.subTitle }>Customize SharePoint experiences using Web Parts.</p>
              <p className={ styles.description }>{escape(this.props.description)}</p>
              <a href="https://aka.ms/spfx" className={ styles.button }>
                <span className={ styles.label }>Learn more</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
