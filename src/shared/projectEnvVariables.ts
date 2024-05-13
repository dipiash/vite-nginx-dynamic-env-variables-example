type ProjectEnvVariablesType = Pick<ImportMetaEnv, 'VITE_VERSION'>

const projectEnvVariables: ProjectEnvVariablesType = {
    VITE_VERSION: '${VITE_VERSION}',
}

export const getProjectEnvVariables = (): {
    envVariables: ProjectEnvVariablesType
} => {
    return {
        envVariables: {
            VITE_VERSION: !projectEnvVariables.VITE_VERSION.includes('VITE_') ? projectEnvVariables.VITE_VERSION : import.meta.env.VITE_VERSION,
        }
    }
}