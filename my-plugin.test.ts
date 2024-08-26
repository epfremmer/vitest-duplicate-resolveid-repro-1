import { describe, it, expect } from 'vitest';

import { msg } from 'virtual:my-module';

describe('myPlugin', () => {
  it('should import virtual module', () => {
    expect(msg).toEqual('from virtual module');
  });
});