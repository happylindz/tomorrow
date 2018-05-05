import React, { PureComponent } from 'react';
import './index.scss';
import classNames from 'classnames';

export default class extends PureComponent {
  state = {
    menuVisible: true,
  }
  handleMenu = (e) => {
    e.preventDefault();
    console.log(this.state);
    this.setState((state) => ({
      menuVisible: !state.menuVisible,
    }));
  }
  render() {
    const { index, scrollToContent } = this.props;
    const menuVisible = this.state.menuVisible;
    if (index && index.length !== 0) {
      return <div className="article-index">
        <p className="title">索引<span>[<a onClick={this.handleMenu} href="#">{menuVisible === true ? '隐藏' : '显示'}</a>]</span></p>
        <ul className={classNames({
          'article-index-main': true,
          'active': menuVisible
        })} onClickCapture={scrollToContent}>{index.map(({ anchor, content, tag }) => (<li key={anchor} className={`tag-${tag}`}><a href={`#${anchor}`}>{content}</a></li>))}</ul>
      </div>;
    }
    return null;
  }
}