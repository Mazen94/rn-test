import React from 'react';
import { Text as RNText } from 'react-native';
import renderer from 'react-test-renderer';

import Text from '../Text/Text';

describe('[Component] Text', () => {
  it('should render a text', () => {
    const tree = renderer.create(<Text>Hello</Text>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render a text with existing style prop (object)', () => {
    const tree = renderer
      .create(<Text style={{ color: 'red', marginTop: 10 }}>Hello</Text>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render a text with native Text children', () => {
    const tree = renderer
      .create(
        <Text>
          <RNText>Hello</RNText> <RNText>world!</RNText>
        </Text>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render a text with a different size', () => {
    const tree = renderer.create(<Text size="m">Hello</Text>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render a text with a different weight', () => {
    const tree = renderer.create(<Text weight="bold">Hello</Text>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render a text with a different color', () => {
    const tree = renderer.create(<Text color="red">Hello</Text>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render a text with a different alignment', () => {
    const tree = renderer.create(<Text align="center">Hello</Text>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render an underline text', () => {
    const tree = renderer.create(<Text underline>Hello</Text>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render a text with default line height', () => {
    const tree = renderer
      .create(<Text useDefaultLineHeight>Hello</Text>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
