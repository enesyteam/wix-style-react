import { testkit as inputTestkit } from '../../Input/Input.uni.driver';

export default base => {
  const getButtons = () => base.$$(`[data-hook*="richtextarea-button"]`);
  const getButtonByType = type =>
    base.$(`[data-hook*="richtextarea-button-${type}"]`);

  return {
    getButtonTypes: () =>
      getButtons().map(async button =>
        (await button.attr('data-hook')).replace(/^richtextarea-button-/, ''),
      ),
    getBoldButton: () => getButtonByType('bold'),
    getItalicButton: () => getButtonByType('italic'),
    getUnderlineButton: () => getButtonByType('underline'),
    getBulletedListButton: () => getButtonByType('unordered-list-item'),
    getNumberedListButton: () => getButtonByType('ordered-list-item'),
    getLinkButton: () => getButtonByType('link'),
    isFormConfirmButtonDisabled: async () =>
      (await base.$('[data-hook=richtextarea-form-confirm-button]').getNative())
        .attributes.disabled,
    isFormDisplayed: () => base.$('[data-hook=richtextarea-form]').exists(),
    clickBoldButton: () => getButtonByType('bold').click(),
    clickItalicButton: () => getButtonByType('italic').click(),
    clickUnderlineButton: () => getButtonByType('underline').click(),
    clickBulletedListButton: () =>
      getButtonByType('unordered-list-item').click(),
    clickNumberedListButton: () => getButtonByType('ordered-list-item').click(),
    clickLinkButton: () => getButtonByType('link').click(),
    clickFormCancelButton: () =>
      base.$('[data-hook="richtextarea-form-cancel-button"]').click(),
    insertLink: async (text, url) => {
      const textInputDriver = inputTestkit(
        base.$('[data-hook="richtextarea-form-link-text"]'),
      );
      const urlInputDriver = inputTestkit(
        base.$('[data-hook="richtextarea-form-link-url"]'),
      );
      const submitButton = base.$(
        '[data-hook="richtextarea-form-confirm-button"]',
      );

      await textInputDriver.enterText(text);
      await urlInputDriver.enterText(url);
      await submitButton.click();
    },
  };
};
