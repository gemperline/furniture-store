/* eslint-disable import/no-extraneous-dependencies */
import webpack from 'webpack';
// default handler does a much better job of showing progress
export const progressPlugin = new webpack.ProgressPlugin();