/**
 * @jest-environment jsdom
 */

import '@testing-library/jest-dom';
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import FormTemplate from '../src/components/FormTemplate/FormTemplate';

describe('FormTemplate Component', () => {
  it('renders without crashing', () => {
    render(<FormTemplate />);
  });

  it('should render with children correctly', () => {
    const { getByText } = render(
      <FormTemplate>
        <div>Test Children</div>
      </FormTemplate>,
    );

    const formTemplate = getByText('Test Children');
    expect(formTemplate).toBeInTheDocument();
  });

  it('should render icon correctly', () => {
    const { getByTestId } = render(
      <FormTemplate icon={<div data-testid="icon" />} />,
    );

    const formTemplateIcon = getByTestId('icon');
    expect(formTemplateIcon).toBeInTheDocument();
  });

  it('should render title correctly', () => {
    const { queryByText } = render(<FormTemplate title="Test Title" />);

    const formTemplateTitle = queryByText('Test Title');
    expect(formTemplateTitle).toBeInTheDocument();
  });

  it('renders subtitle when provided', () => {
    const { queryByText } = render(<FormTemplate subtitle="Test Subtitle" />);

    const formTemplateSubtitle = queryByText('Test Subtitle');
    expect(formTemplateSubtitle).toBeInTheDocument();
  });

  it('applies containerProps correctly', () => {
    const { container } = render(
      <FormTemplate
        icon={<div data-testid="icon" />}
        containerProps={{ className: 'custom-class' }}
      />,
    );

    expect(container.firstChild).toHaveClass('custom-class');
  });
});
