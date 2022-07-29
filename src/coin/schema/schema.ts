import items from './schemaItems';

const assetsSchema = {
  type: 'object',
  properties: {
    data: {
      type: 'array',
      items: {
        type: 'object',
        properties: items.assetsItemsProps,
        required: Object.keys(items.assetsItemsProps),
      },
    },
  },
};

export default { assetsSchema };
