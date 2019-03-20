/* eslint-disable react/prop-types */
import React from 'react';
import { MessageBoxMarketerialLayout } from 'wix-style-react/MessageBox';

export default () => (
  <MessageBoxMarketerialLayout
    title={"Nice! Your site is set up"}
    content="Next, connect your business email, chat and more to look professional. Keep Going"
    confirmText="Show Me"
    imageUrl="https://media.giphy.com/media/srg19CG0cKMuI/giphy.gif"
    theme="white"
    primaryButtonLabel="Button"
    primaryButtonTheme="blue"
    dataHook="announcement-celebratory"
  />
);
