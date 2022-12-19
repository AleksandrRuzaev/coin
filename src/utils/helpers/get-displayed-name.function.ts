const getDisplayedName = <P extends object>(
    WrappedComponent: React.ComponentType<P>,
): string =>
    WrappedComponent.displayName ?? WrappedComponent.name ?? 'Component';

export { getDisplayedName };
